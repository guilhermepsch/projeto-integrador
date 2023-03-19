import express, { Express, Request, Response } from 'express';
import { env } from 'process';

const app: Express = express();
const port = process.env.SERVERPORT

app.get('/', (req: Request, res: Response) => {
    res.send('TA FUNCIONANDO CARALHO');
});

app.get('/teste',(req: Request, res: Response) => {
    res.send('rota teste');
});

app.listen(port, () => {
    console.log(`[Server]: Rodando em http://localhost:${port}`);
});