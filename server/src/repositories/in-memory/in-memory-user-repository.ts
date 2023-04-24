import { User } from "../../entities/user";
import { UserRepository } from "../user-repository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.getEmail === email);
    if (!user) return null;
    return user;
  }

}