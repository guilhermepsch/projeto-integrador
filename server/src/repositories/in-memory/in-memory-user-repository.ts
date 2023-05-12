import { User } from '../../entities/user';
import { CreateUserDTO } from '../../use-cases/create-user/create-user-dto';
import { UpdateUserDTO } from '../../use-cases/update-user/update-user-dto';
import { UserRepository } from '../user-repository';

export class InMemoryUserRepository implements UserRepository {
	private users: User[] = [];

	constructor(users: User[] = []) {
		this.users = users;
	}

	async create(user: CreateUserDTO): Promise<void> {
		if (this.users.find(userRepo => userRepo.getEmail() === user.email))
			throw new Error('User already exists');
		const newUser = new User(
			this.users.length + 1,
			user.email,
			user.secret,
			new Date(),
			new Date(),
		);
		this.users.push(newUser);
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = this.users.find(user => user.getEmail() === email);
		if (!user) return null;
		return user;
	}

	async read(): Promise<User[]> {
		return this.users;
	}

	async update(user: UpdateUserDTO): Promise<User> {
		const index = this.users.findIndex(
			userRepo => userRepo.getId() === user.id,
		);
		if (index === -1) throw new Error('User not found');
		const newUser = new User(
			user.id,
			user.email,
			user.secret,
			new Date(),
			this.users[index].getCreatedAt(),
		);
		this.users[index] = newUser;
		return newUser;
	}

	async delete(id: number): Promise<void> {
		const index = this.users.findIndex(user => user.getId() === id);
		if (index === -1) throw new Error('User not found');
		this.users.splice(index, 1);
	}
}
