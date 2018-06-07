const GeneralService = require('./GeneralService');

const userModel = {
	getUserById :  ()=> {
		return `mock user model response`;
	}
}

const customerModel = {
	getCustomerById :  ()=> {
		return `mock customer model response`;
	}
}

const cloudinaryUploader =  {
	upload: ()=>{
		return `mock upload response`;	
	}
}

const generalService = new GeneralService({userModel, customerModel, cloudinaryUploader});
const dataResponse = generalService.getUsersAndCustomers();

console.log(dataResponse);




