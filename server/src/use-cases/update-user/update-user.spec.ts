import { describe, expect, it } from 'vitest';
import { UpdateUser } from './update-user';
import { InMemoryUserRepository } from '../../repositories/in-memory/in-memory-user-repository';
import { User } from '../../entities/user';

describe('update an user', () => {
	it('should be able to update an user', async () => {
		const updateUser = new UpdateUser(
			new InMemoryUserRepository([
				new User(
					1,
					'flavindopneu@gmail.com',
					'123456',
					new Date(),
					new Date(),
				),
			]),
		);

		expect(
			updateUser.execute({
				id: 1,
				email: 'joaozinho2@gaming.com',
				secret: '123456',
			}),
		).resolves.toBeInstanceOf(User);
	});

	it('should not be able to update an user that does not exist', () => {
		const updateUser = new UpdateUser(new InMemoryUserRepository());

		expect(
			updateUser.execute({
				id: 1,
				email: 'joaocleber@gmail.com',
				secret: '123456',
			}),
		).rejects.toThrowError('User not found');
	});
});
