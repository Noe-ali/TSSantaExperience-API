import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const usersRouter = Router();

usersRouter.get('/', UserController.getAll);
// usersRouter.get('/:id', UserController.getById))
// usersRouter.post('/', UserController.create))
// usersRouter.delete('/:id', UserController.delete))
// usersRouter.put('/:id', UserController.update))

export default usersRouter;