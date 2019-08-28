const routes = require('express').Router();
const authMiddleware = require('./app/middlewares/auth');
const UserController = require('./app/controllers/UserConstroller');
const AuthController = require('./app/controllers/AuthController');
const CompanyController = require('./app/controllers/CompanyController');

routes.post('/users', UserController.store);
routes.post('/authenticate', AuthController.authenticate);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);
routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.store);


module.exports = routes;