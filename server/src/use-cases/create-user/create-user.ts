import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user-repository";
import { CreateUserDTO } from "./create-user-dto";


interface CreateUserRequest {
  name: string;
  email: string;
  secret: string;
 }

export class CreateUser {

  private userRepository: UserRepository;

  constructor(
    userRepository: UserRepository
  ) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, secret}: CreateUserRequest): Promise<void> {
    const user : CreateUserDTO = {
      name,
      email,
      secret
    }
    await this.userRepository.create(user);
  }
}