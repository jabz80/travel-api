const bcrypt = require('bcrypt');
const Users = require('../models/users');
const Token = require('../models/token');

async function register(req, res) {
    try {
        const data = req.body;

        // Hash the password
        data['password'] = await bcrypt.hash(data['password'], 10);

        const result = await Users.create(data);

        res.status(201).send(result);
    } catch (err) {
        if (err.message.includes('duplicate key value violates unique constraint "users_email_key"')) {
            res.status(400).send({ error: 'Email address is already in use.' });
        } else {
            res.status(400).send({ error: err.message });
        }
    }
}

async function login(req, res) {
    const data = req.body;
    try {
      const user = await Users.getOneByUsername(data.email);
  
      const authenticated = await bcrypt.compare(data.password, user.password);
  
      if (!authenticated) {
        throw new Error('Incorrect credentials.');
      } else {
        const token = await Token.create(user.user_id);
        res.status(200).json({ success: true, message: 'Login successful', token: token.token });
      }
    } catch (err) {
      res.status(403).json({ success: false, error: err.message });
    }
  }

module.exports = { register, login };
