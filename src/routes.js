import { Router } from 'express';

import { UserController } from './controllers/UserController.js';

const userController  = new UserController();

const routes = Router();

routes.get('/', (request, response) => {
     return response.redirect("/users");
});

routes.get('/users', userController.show);
routes.post('/users', userController.create);

export default routes ;