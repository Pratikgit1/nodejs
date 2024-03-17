//start editing here
const express = require('express');
 const routingUser = express.Router(); 
 const myController = require('../controllers/myController'); 
 routingUser.get('/getUsers', myController.getUsers);
routingUser.post('/addUser', myController.addUser);
routingUser.all('*', myController.invalid);
module.exports = routingUser;