import EtudiantServices from '../services/etudiantService.js';

import express from 'express';



const routes = express.Router();


routes.get('/', EtudiantServices.getEtudiants);

routes.get('/:id', EtudiantServices.getEtuByID);

routes.delete('/:id', EtudiantServices.deleteEtu);

routes.post('/poster', EtudiantServices.create);


export default  routes;

