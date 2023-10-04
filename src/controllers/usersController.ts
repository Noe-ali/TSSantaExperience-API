import { UserModel } from "../models/user";


export class UsersController{
    static async getAll(req, res){
        const users = await UserModel.getAll();
    }
}