const DBConnection = new require('../utils/DbConnection');
const UserModel = require('./user.model');
const CustomerModel = require('./customer.model');

class ModelsFactory {
	
	constructor({ UserModel, CustomerModel }, DBConnection) {
		this.dbConnection = new DBConnection();
		this.UserModel = UserModel;
		this.CustomerModel = CustomerModel;
	}

	create(modelName) {
		
		switch (modelName) {
			case 'User':
				return new this.UserModel(this.dbConnection);
			case 'Customer':
				return new this.CustomerModel(this.dbConnection);
			default:
				throw Error('unsupported model name!')
		}
	}
}


module.exports = new ModelsFactory({UserModel, CustomerModel}, DBConnection);