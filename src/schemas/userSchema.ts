import * as z from "zod";

export interface User {
  id: number;
  username: string;
  password?: string;
  phone_number?: string;
}

const userSchema = z.object({
  id: z.number().optional(),
  username: z.string({
    invalid_type_error: "Username must be a string",
    required_error: "Username is required",
  }),
  password: z.string().optional(),
  phone_number: z.string().optional(),
});

export function validatePartialUser(user: Partial<User>) {
  return userSchema.partial().safeParse(user);
}

export function validateUser(user: User) {
  return userSchema.safeParse(user);
}
