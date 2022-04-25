const express = require("express");
const controllers = require("./controllers/controllers");
const routes = express.Router();


routes.get('/access', controllers.index.index_get_access)
routes.post('/access', controllers.index.request_access)
routes.get('*', controllers.generalControllers.notFound)
routes.post('*', controllers.generalControllers.forbidden)


module.exports = routes;
