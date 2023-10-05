import { User } from "../schemas/userSchema";
import { Pool, Client } from "pg";

const pool = new Pool(
  // {
  //   user: "postgres",
  //   host: "localhost",
  //   database: "TSSexperience",
  //   password: "postgres",
  //   port: 5432,
  // }
);

export class UserModel {
  static async getAll() {
    const getUsers = await pool.query(
      "SELECT username, password, phone_number FROM users"
    );
    await pool.end();
    return getUsers.rows;
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
