const generalServiceFactory = require('./GeneralServiceFactory');


const generalService = generalServiceFactory.create();

const res = generalService.getUsersAndCustomers();


console.log(res);