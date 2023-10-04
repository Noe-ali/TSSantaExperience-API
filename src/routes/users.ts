import { Router } from 'express';
import { UserModel } from '../models/user';
const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    const users = await UserModel.getAll();
    res.json(users)
})


export default usersRouter;