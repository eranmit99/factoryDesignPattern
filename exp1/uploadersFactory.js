/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2018-06-06 23:28:26
 */

const S3 = require('./s3.uploader');
const Cloudinary = require('./cloudinary.uploader');

class UploadersFactory {

	constructor({Cloudinary, S3}) {
		this.Cloudinary = Cloudinary;
		this.S3 = S3;
	}

	createUploader(provider) {
		switch (provider) {
			case 'Cloudinary':
				return new this.Cloudinary;
			case 'S3':
				return new this.S3;
			default:
				throw Error('Unsupported provider!')
			break;
		}
	}
}

module.exports = new UploadersFactory({Cloudinary, S3});

