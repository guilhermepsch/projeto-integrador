import express from 'express';
import { UserController } from './use-cases/create-user/create-user-controller';

const routes = express.Router();

routes.post('/user', (req, res) => new UserController().create(req, res));

export default routes;