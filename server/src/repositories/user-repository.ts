import { User } from "../entities/user";
import { CreateUserDTO } from "../use-cases/create-user/create-user-dto";

export interface UserRepository {
  create (user: CreateUserDTO): Promise<void>;
  findByEmail (email: string): Promise<User | null>;
}