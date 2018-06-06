

const BaseModel = require('./base.model');

class CustomerModel extends BaseModel{
	constructor(dbConnection) {
		super(dbConnection);
	}

	getCustomerById(userId) {
 		return this.query('fetch customer query'); 
	}
}

module.exports = CustomerModel;