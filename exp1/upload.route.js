const uploadersFactory = require('./uploadersFactory.js');


const cloudinary = uploadersFactory.createUploader('Cloudinary');
const s3 = uploadersFactory.createUploader('S3');

cloudinary.upload();
s3.upload();
