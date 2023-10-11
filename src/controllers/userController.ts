import { UserModel } from "../models/user";
import { User, validateUser } from "../schemas/userSchema";

export class UserController {
  constructor(private userModel: UserModel) {}

  getAll = async (req: any, res: any) => {
    try {
      const users = await this.userModel.getAll();
      return res.json(users);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  getById = async (req: any, res: any) => {
    try {
      const user = await this.userModel.getById(req.params.id);
      if (user) return res.json(user);
      res.status(404).json({ error: "No user found" });
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  // async create(req: any, res: any) {
  //   const result = validateUser(req.body);
  //   if (!result.success) {
  //     return res.status(400).json({ error: result.error.message });
  //   }
  //   const newUser = await this.userModel.create(req.body);
  //   res.json(newUser);
  // }
}
