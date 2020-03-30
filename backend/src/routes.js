const express =  require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionCrontoller = require('./controllers/SessionController')


const routes = express.Router();

routes.post('/sessions', SessionCrontoller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);                                                                                                                                                                 

routes.get('/profile', ProfileController.profileIndex);

routes.post('/incidents', i.create);
routes.get('/incidents', i.index);
routes.delete('/incidents/:id',IncidentController.delete);



module.exports = routes;