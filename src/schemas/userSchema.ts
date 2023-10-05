import * as z from "zod";

export interface User {
  id: number;
  username: string;
  password?: string;
  phone_number?: string;
}

const userSchema = z.object({
  id: z.number(),
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
  const result = userSchema.safeParse(user);
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error.toString());
  }
}