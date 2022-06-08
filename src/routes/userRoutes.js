import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import userController from '../controllers/UserController';

const router = new Router();

router.delete('/deleteUser/', loginRequired, userController.deleteUserById);
router.put('/updateUser/', loginRequired, userController.updateUser);
router.post('/criarUsuario', userController.create);
// Não podem ter acesso livre
router.get('/listarUsuarios', userController.listarUsuarios); // Lista usuário
router.get('/findUserById/:id', userController.findUserById);

export default router;
