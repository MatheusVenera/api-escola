import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/UserController';

const router = new Router();

// Não deveria existir
router.post('/criarUsuario', userController.create);
router.put('/updateUser/', loginRequired, userController.updateUser);
router.delete('/deleteUser/', loginRequired, userController.deleteUserById);
export default router;
