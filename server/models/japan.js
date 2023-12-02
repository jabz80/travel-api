const db = require('../database/connect')

class Japan {
    constructor({id, name, description, image_url, web_url}) {
        this.id = id
        this.name = name
        this.description = description
        this.image_url = image_url
        this.web_url = web_url
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM japan;")
        if (response.rows.length === 0) {
            throw new Error("No Places Found")
        }
        return response.rows.map(jp => new Japan(jp))
    }


    // get by name method.




    // post method to add new location
    



    // patch method to update a location
    
    
    

    // delete method to delete a location


    
}

module.exports = Japan