
const models = require('../exp2/models');
const uploadersFactory = require('../exp1/uploadersFactory');


const GeneralService = require('./GeneralService');
const customerModel = models.create('Customer');
const userModel = models.create('User');
const cloudinaryUploader = uploadersFactory.create('Cloudinary');


class GeneralServiceFactory {
	
	constructor({ userModel, customerModel, cloudinaryUploader }) {
		this.cloudinaryUploader = cloudinaryUploader;
		this.userModel = userModel;
		this.customerModel = customerModel;
	}

	create(modelName) {
   
		return new GeneralService({
			customerModel: this.customerModel,
			userModel: this.userModel,
			cloudinaryUploader: this.cloudinaryUploader
		});
	}
}


module.exports = new GeneralServiceFactory({userModel, customerModel, cloudinaryUploader });


