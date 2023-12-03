const db = require('../database/connect')


class Users {
    constructor({user_id, name, email, password}) {
        this.user_id = user_id
        this.name = name
        this.email = email
        this.password = password
    } 

    static async getOneById(id) {
        const response = await db.query('SELECT * FROM users WHERE user_id = $1', [
          id,
        ]);
        if (response.rows.length != 1) {
          throw new Error('Unable to locate user.');
        }
        return new Users(response.rows[0]);
      }

      static async getOneByUsername(email) {
        try {
            const response = await db.query('SELECT * FROM users WHERE email = $1', [email]);
            if (response.rows.length !== 1) {
                throw new Error(`Unable to locate user with email: ${email}.`);
            }
            return new Users(response.rows[0]);
        } catch (error) {
            console.error(error); // Log the error for debugging
            throw error; // Rethrow the error to propagate it up to the controller
        }
    }

      static async create(data) {
        const { name, email, password } = data;
        let response = await db.query(
          'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING user_id;',
          [name, email, password]
        );
        const newId = response.rows[0].user_id;
        const newUser = await Users.getOneById(newId);
        return newUser;
      }


}

module.exports = Users;