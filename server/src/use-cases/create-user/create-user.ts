import { UserRepository } from '../../repositories/user-repository';
import { CreateUserDTO } from './create-user-dto';

export interface CreateUserRequest {
	email: string;
	secret: string;
}

export class CreateUser {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async execute({ email, secret }: CreateUserRequest): Promise<void> {
		if (await this.userRepository.findByEmail(email)){
			throw new Error('User already exists');
		}
		const user: CreateUserDTO = {
			email,
			secret,
		};
		await this.userRepository.create(user);
	}
}