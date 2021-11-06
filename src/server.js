import express from 'express';
import routes from './routes.js';
import path from 'path';

const server = express();
server.use(express.json());

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.resolve('src','views'));

server.use(routes);

server.listen(8080, () => console.log('server rodando...!'));