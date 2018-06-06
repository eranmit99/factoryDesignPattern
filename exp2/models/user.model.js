
const BaseModel = require('./base.model');

class UserModel extends BaseModel{
	constructor(dbConnection) {
		super(dbConnection);
	}

	getUserById(userId) {
 		return this.query('fetch user query'); 
	}
}

module.exports = UserModel;