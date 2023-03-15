import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('get request to the homepage');
});

app.listen(port, () => {
    console.log(`[Server]: Rodando em http://localhost:${port}`);
});