import { Router } from "express";
import { UserController } from "../controllers/userController";
import { UserModel } from "../models/user";

export const createUserRouter = (): Router => {
  const usersRouter = Router();
  const userController = new UserController(new UserModel());

  usersRouter.get("/", userController.getAll);
  usersRouter.get("/:id", userController.getById);
  usersRouter.post("/", userController.create);
  usersRouter.delete('/:id', UserController.delete))
  usersRouter.put('/:id', UserController.update))

  return usersRouter;
};
export default createUserRouter;
