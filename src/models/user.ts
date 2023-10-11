import { User } from "../schemas/userSchema";
import { Pool, Client } from "pg";

const pool = new Pool();

export class UserModel {
  async getAll(): Promise<User[]> {
    const getUsers = await pool.query(
      "SELECT user_id, username, password, phone_number FROM users"
    );
    return getUsers.rows;
  }

  async getById(id: string): Promise<User> {
    const getUser = await pool.query(
      "SELECT username, password, phone_number FROM users WHERE user_id = $1",
      [id]
    );
    return getUser.rows[0];
  }

  async create(request: User): Promise<User> {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const newUser = await client.query(
        "INSERT INTO users (username, password, phone_number) VALUES ($1, $2, $3) RETURNING *",
        [request.username, request.password, request.phone_number]
      );
      await client.query("COMMIT");
      return newUser.rows[0];
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  }

  // static async delete({id}){

  // }

  // static async update({id, input}){
  // }
}
