import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';
import { ReadUserController } from './use-cases/read-user/read-user-controller';
import { UpdateUserController } from './use-cases/update-user/update-user-controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user-controller';
import { CreateCatalogueController } from './use-cases/create-catalogue/create-catalogue-controller';
import { ReadCatalogueController } from './use-cases/read-catalogue/read-catalogue-controller';
import { UpdataCatalogueController } from './use-cases/update-catalogue/updade-catalogue-controller';
import { DeleteCatalogueController } from './use-cases/delete-catalogue/delete-catalogue-controller';


const routes = express.Router();


//User Routes
routes.get('/', (req, res) => res.send('Pong!'));

// user routes
routes.post('/user', (req, res) => new CreateUserController().create(req, res));
routes.get('/user', (req, res) => new ReadUserController().read(req, res));
routes.put('/user/:id', (req, res) =>new UpdateUserController().update(req, res),);
routes.delete('/user/:id', (req, res) =>new DeleteUserController().delete(req, res),);
//=======

//Catalogue Routes
routes.post('/catalogue', (req, res) => new CreateCatalogueController().create(req, res));
routes.get('/catalogue', (req, res) => new ReadCatalogueController().read(req, res));
routes.put('/catalogue/:id', (req, res) =>new UpdataCatalogueController().update(req, res),);
routes.delete('/catalogue/:id', (req, res) =>new DeleteCatalogueController().delete(req, res),);
export default routes;

