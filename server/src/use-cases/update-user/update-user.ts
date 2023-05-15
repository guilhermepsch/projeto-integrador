import { User } from '../../entities/user';
import { UserRepository } from '../../repositories/user-repository';
import { UpdateUserDTO } from './update-user-dto';

interface UpdateUserRequest {
	id: number;
	email: string;
	secret: string;
}

export class UpdateUser {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async execute({ id, email, secret }: UpdateUserRequest): Promise<User> {
		const user: UpdateUserDTO = {
			id,
			email,
			secret,
		};
		return await this.userRepository.update(user);
	}
}
