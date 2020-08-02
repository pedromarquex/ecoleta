import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import { errors } from 'celebrate';

import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use('/uploads/', express.static(resolve(__dirname, '..', 'uploads')));

server.use(errors());

server.listen(3333);