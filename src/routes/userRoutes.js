import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/criarUsuario', userController.create);
router.get('/listarUsuarios', userController.index);
router.get('/findUserById/:id', userController.findUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUserById);
export default router;
