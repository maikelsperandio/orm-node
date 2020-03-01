const { Router } = require('express');
const routes = Router();

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);

module.exports = routes;
