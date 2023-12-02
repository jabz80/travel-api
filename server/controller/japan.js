const Japan = require('../models/japan');

const index = async (req, res) => {
    try {
        const places = await Japan.getAll()
        res.status(200).json(places)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {index}