import { UserRepository } from '../../repositories/user-repository';
import { DeleteUserDTO } from './delete-user-dto';

export class DeleteUser {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async execute(id: number): Promise<void> {
		const user: DeleteUserDTO = {
			id,
		};
		await this.userRepository.delete(user.id);
	}
}
