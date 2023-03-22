import express, { Express, Request, Response } from 'express';
import { env } from 'process';

const app: Express = express();
const port = process.env.SERVERPORT

app.get('/', (req: Request, res: Response) => {
    res.send('sample get request');
});

app.listen(port, () => {
    console.log("[SERVER] Rodando em http://localhost:" + port);
});