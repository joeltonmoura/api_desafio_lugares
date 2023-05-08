import 'reflect-metadata';
import './database';
import express from 'express';
import { routes } from './routes/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8888, () => console.log(`Server is running on PORT ${8888}`));
