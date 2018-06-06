const BaseUploader = require('./base.uploader');

class S3 extends BaseUploader {
	constructor() {
		super();
	}

	upload() {
		console.log('uploaded data to S3!');
	}
}

module.exports = S3;
