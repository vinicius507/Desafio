const { Router } = require('express');

const DocController = require('./controllers/DocController');

const routes = Router();

routes.post('/document', DocController.store);
routes.patch('/document', DocController.update);

module.exports = routes;