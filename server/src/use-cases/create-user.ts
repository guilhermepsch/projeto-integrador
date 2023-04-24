import { User } from "../entities/user";
import { UserRepository } from "../repositories/user-repository";

interface CreateUserRequest {
  name: string;
  email: string;
  secret: string;
 }

type CreateUserResponse = User; 

export class CreateUser {

  private userRepository: UserRepository;

  constructor(
    userRepository: UserRepository
  ) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, secret}: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User(
      name,
      email,
      secret
    );
    await this.userRepository.create(user);
    return user;
  }
}