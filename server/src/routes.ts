import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';
import { ReadUserController } from './use-cases/read-user/read-user-controller';
import { UpdateUserController } from './use-cases/update-user/update-user-controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user-controller';
import { CreateEmployeeController } from './use-cases/create-employee/create-employee-controller';
import { ReadEmployeeController } from './use-cases/read-employee/read-employee-controller';
import { DeleteEmployeeController } from './use-cases/delete-employee/delete-employee-controller';
import { UpdateEmployeeController } from './use-cases/update-employee/update-employee-controller';

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

// employee routes
routes.post('/employee', (req, res) =>
	new CreateEmployeeController().create(req, res),
);
routes.get('/employee', (req, res) =>
	new ReadEmployeeController().read(req, res),
);
routes.put('/employee/:id', (req, res) =>
	new UpdateEmployeeController().update(req, res),
);
routes.delete('/employee/:id', (req, res) =>
	new DeleteEmployeeController().delete(req, res),
);

export default routes;
