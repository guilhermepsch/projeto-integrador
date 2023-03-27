import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();
const port = String(process.env.SERVERPORT)

app.use(routes);

app.listen(port, () => {
    console.log("[SERVER] Rodando em http://localhost:" + port);
});