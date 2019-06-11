const {Router} = require('express');
const Place = require('../controller/place.controller');

const placesApiRouter = Router();

placesApiRouter.post('/', Place.create);

placesApiRouter.get('/', Place.readAll);

placesApiRouter.get('/:id', Place.read);

placesApiRouter.put('/:id', Place.update);

placesApiRouter.delete('/:id', Place.delete);

module.exports = placesApiRouter;