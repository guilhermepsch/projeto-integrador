import { describe, it, expect } from 'vitest';
import { User } from '../../entities/user';
import { InMemoryUserRepository } from '../../repositories/in-memory/in-memory-user-repository';
import { DeleteUser } from './delete-user';

describe('delete an user', () => {
	it('should be able to delete an user', () => {
		const deleteUser = new DeleteUser(
			new InMemoryUserRepository([
				new User(
					1,
					'joaocleber@gmail.com',
					'123456',
					new Date(),
					new Date(),
				),
			]),
		);

		expect(deleteUser.execute(1)).resolves.toBeUndefined();
	});

	it('should not be able to delete an user that does not exist', () => {
		const deleteUser = new DeleteUser(new InMemoryUserRepository());

		expect(deleteUser.execute(1)).rejects.toThrowError('User not found');
	});
});
