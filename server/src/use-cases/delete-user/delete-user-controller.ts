import { Request, Response } from 'express';
import { DeleteUser } from './delete-user';
import { PrismaUserRepository } from '../../repositories/prisma/prisma-user-repository';
import { PrismaClient } from '@prisma/client';

export class DeleteUserController {
	private deleteUser: DeleteUser;

	constructor() {
		this.deleteUser = new DeleteUser(
			new PrismaUserRepository(new PrismaClient()),
		);
	}

	async delete(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			await this.deleteUser.execute(Number(id));
			return res.status(200).send();
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
