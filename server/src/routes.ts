import express from 'express';
import { CreateUserController } from './use-cases/create-user/create-user-controller';
import { ReadUserController } from './use-cases/read-user/read-user-controller';
import { UpdateUserController } from './use-cases/update-user/update-user-controller';
import { DeleteUserController } from './use-cases/delete-user/delete-user-controller';
import { CreateEmployeeController } from './use-cases/create-employee/create-employee-controller';
import { ReadEmployeeController } from './use-cases/read-employee/read-employee-controller';
import { DeleteEmployeeController } from './use-cases/delete-employee/delete-employee-controller';
import { UpdateEmployeeController } from './use-cases/update-employee/update-employee-controller';
import { CreateOrderController } from './use-cases/create-order/create-order-controller';
import { ReadOrderController } from './use-cases/read-order/read-order-controller';
import { DeleteOrderController } from './use-cases/delete-order/delete-order-controller';
import { UpdateOrderController } from './use-cases/update-order/update-order-controller';
import { CreateCartController } from './use-cases/create-cart/create-cart-controller';
import { ReadCartController } from './use-cases/read-cart/read-cart-controller';
import { UpdateCartController } from './use-cases/update-cart/update-cart-controller';
import { DeleteCartController } from './use-cases/delete-cart/delete-cart-controller';
import { CreateCatalogueController } from './use-cases/create-catalogue/create-catalogue-controller';
import { ReadCatalogueController } from './use-cases/read-catalogue/read-catalogue-controller';
import { UpdataCatalogueController } from './use-cases/update-catalogue/updade-catalogue-controller';
import { DeleteCatalogueController } from './use-cases/delete-catalogue/delete-catalogue-controller';
import { CreateProductController } from './use-cases/create-product/create-product-controller';
import { DeleteProductController } from './use-cases/delete-product/delete-product-controller';
import { ReadProductController } from './use-cases/read-product/read-product-controller';
import { UpdateProductController } from './use-cases/update-product/update-product-controller';

const routes = express.Router();

// set cors to allow all origins
routes.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

routes.get('/', (req, res) => res.send('Pong!'));

// user routes
routes.post('/user', (req, res) => new CreateUserController().create(req, res));
routes.get('/user', (req, res) => new ReadUserController().read(req, res));
routes.put('/user/:id', (req, res) =>new UpdateUserController().update(req, res),);
routes.delete('/user/:id', (req, res) =>new DeleteUserController().delete(req, res),);

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

// cart routes
routes.post('/cart', (req, res) => new CreateCartController().create(req, res));
routes.get('/cart', (req, res) => new ReadCartController().read(req, res));
routes.put('/cart/:id', (req, res) =>
	new UpdateCartController().update(req,res));
routes.delete('/cart/:id', (req, res) =>
	new DeleteCartController().delete(req, res),
);

// order routes
routes.post('/order', (req, res) => new CreateOrderController().create(req, res));
routes.get('/order', (req, res) => new ReadOrderController().read(req, res));
routes.put('/order/:id', (req, res) =>
 	new UpdateOrderController().update(req,res));
routes.delete('/order/:id', (req, res) =>
	new DeleteOrderController().delete(req, res),
);

// catalogue Routes
routes.post('/catalogue', (req, res) => new CreateCatalogueController().create(req, res));
routes.get('/catalogue', (req, res) => new ReadCatalogueController().read(req, res));
routes.put('/catalogue/:id', (req, res) =>new UpdataCatalogueController().update(req, res),);
routes.delete('/catalogue/:id', (req, res) =>new DeleteCatalogueController().delete(req, res),);

// product routes
routes.post('/product', (req, res) => new CreateProductController().create(req, res));
routes.get('/product', (req, res) => new ReadProductController().read(req, res));
routes.put('/product/:id', (req, res) => new UpdateProductController().update(req, res));
routes.delete('/product/:id', (req, res) => new DeleteProductController().delete(req, res));


export default routes;

