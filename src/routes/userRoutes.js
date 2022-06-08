import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/criarUsuario', userController.create);

export default router;
