const models = require('./models');

const customerModel = models.create('Customer');

const c = customerModel.getCustomerById(1234);

console.log(c);