import { User } from "../../entities/user";
import { CreateUserDTO } from "../../use-cases/create-user/create-user-dto";
import { UserRepository } from "../user-repository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: CreateUserDTO): Promise<void> {

    const newUser = new User(
      this.users.length + 1,
      user.name,
      user.email,
      user.secret,
      new Date(),
      new Date()
    );
    this.users.push(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.getEmail() === email);
    if (!user) return null;
    return user;
  }

}