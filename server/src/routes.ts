import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';

const routes = express.Router();

routes.get('/', (req, res) => res.send('Pong!'));
routes.post('/user', (req, res) => new CreateUserController().create(req, res));

export default routes;