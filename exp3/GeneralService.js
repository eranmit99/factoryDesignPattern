

class GeneralService {
	constructor({userModel, customerModel, cloudinaryUploader}) {
		this.userModel = userModel;
		this.customerModel =  customerModel;
		this.cloudinaryUploader = cloudinaryUploader;
	}


	getUsersAndCustomers() {

		const user = this.userModel.getUserById(1234);
		const customer = this.customerModel.getCustomerById(122);

		return `user: ${user} and customer:  ${customer}`;
	}

	uploadeData(data) {
		this.cloudinaryUploader.upload(data)
	}	
}

module.exports = GeneralService;