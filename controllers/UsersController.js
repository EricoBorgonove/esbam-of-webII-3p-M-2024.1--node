const {Users} = require('../models')
require ('dotenv').config()

module.exports = class UsersController {
    static async showAll(req, res) {
        try {
           const users = await Users.findAll() 
            res.status(200).json({
                data: users
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
          
        
    }
}