import { User } from "@prisma/client";

export interface CreateUserDTO {
  email: string;
  password: string;
}

export type CreateUserArgs = Pick<User, "email" | "passwordHash">;
