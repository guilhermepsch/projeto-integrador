import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';
import { ReadUserController } from './use-cases/read-user/read-user-controller';
import { UpdateUserController } from './use-cases/update-user/update-user-controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user-controller';
import { CreateOrderController } from './use-cases/create-order/create-order-controller';
import { ReadOrderController } from './use-cases/read-order/read-order-controller';
import { DeleteOrderController } from './use-cases/delete-order/delete-order-controller';
import { UpdateOrderController } from './use-cases/update-order/update-order-controller';

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

// order routes
routes.post('/order', (req, res) => new CreateOrderController().create(req, res));
routes.get('/order', (req, res) => new ReadOrderController().read(req, res));
routes.put('/order/:id', (req, res) =>
 	new UpdateOrderController().update(req,res));
routes.delete('/order/:id', (req, res) =>
	new DeleteOrderController().delete(req, res),
);
export default routes;
