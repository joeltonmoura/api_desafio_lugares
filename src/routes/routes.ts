import { request, response, Router } from 'express';
import { atualizarImagemPais } from '../modules/Paises/factory';
import { local } from '../modules/Visitas/factory';

const routes = Router();

routes.post('/atualizarPaises', (request, response) => atualizarImagemPais().handle(request, response));
routes.post('/criarLocal', (request, response) => local().createLocal(request, response));
routes.get('/getllocal', (request, response) => local().getLocal(request, response));
routes.put('/atualizarlocal', (request, response) => local().atualizarLocal(request, response));

export { routes };
