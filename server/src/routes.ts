import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';
import { ReadUserController } from './use-cases/read-user/read-user-controller';
import { UpdateUserController } from './use-cases/update-user/update-user-controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user-controller';
import { CreateCartController } from './use-cases/create-cart/create-cart-controller';
import { ReadCartController } from './use-cases/read-cart/read-cart-controller';
import { UpdateCartController } from './use-cases/update-cart/update-cart-controller';
import { DeleteCartController } from './use-cases/delete-cart/delete-cart-controller';

const routes = express.Router();

routes.get('/', (req, res) => res.send('Pong!'));

// user routes
routes.post('/user', (req, res) => new CreateUserController().create(req, res));
routes.get('/user', (req, res) => new ReadUserController().read(req, res));
routes.put('/user/:id', (req, res) =>
	new UpdateUserController().update(req, res),
);
routes.delete('/user/:id', (req, res) =>
	new DeleteUserController().delete(req, res),
);

// cart routes
routes.post('/cart', (req, res) => new CreateCartController().create(req, res));
routes.get('/cart', (req, res) => new ReadCartController().read(req, res));
routes.put('/cart/:id', (req, res) =>
	new UpdateCartController().update(req,res));
routes.delete('/cart/:id', (req, res) =>
	new DeleteCartController().delete(req, res),
);

export default routes;
