import { UserModel } from "../models/user";


export class UsersController{
    static async getAll(req: any, res: any){
        const users = await UserModel.getAll();
        res.json(users)
    }
}