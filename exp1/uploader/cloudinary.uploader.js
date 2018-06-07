const BaseUploader = require('./base.uploader');

class Cloudinary extends BaseUploader{
	constructor() {
		super();
	}

	upload() {
		console.log('uploaded data to Cloudinary!');
	}
}

module.exports = Cloudinary;
