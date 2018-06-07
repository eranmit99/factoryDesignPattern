const uploader = require('./uploader');


const cloudinary = uploader.create('Cloudinary');
const s3 = uploader.create('S3');

cloudinary.upload();
s3.upload();
