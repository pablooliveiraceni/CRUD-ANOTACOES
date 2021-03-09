const express = require("express");
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController')
//Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//Rota priority
routes.get('/priorities', PriorityController.read);
routes.put('/priorities/:id', PriorityController.update);

// Rota contents
routes.put('/contents/:id', ContentController.update)
module.exports = routes;