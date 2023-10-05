import { User } from "../schemas/userSchema";

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TSSexperience',
  password: 'postgres',
  port: 5432,
})


export class UserModel{

  static async getAll(){
  }

  // static async getById(id: number): User{
  // }

  // static async create({input}}){

  // }

  // static async delete({id}){

  // }

  // static async update({id, input}){
  // }
}