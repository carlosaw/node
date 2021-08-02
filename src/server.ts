import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static( path.join(__dirname, '../public') ));// Acessa tudo no browser

server.use(express.urlencoded({extended: true}));// Para enviar req.body

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
  res.status(404).send('Página não encontrada!');
});

server.listen(80);