import { Request, Response } from 'express';
import { UpdateUser } from './update-user';
import { PrismaUserRepository } from '../../repositories/prisma/prisma-user-repository';
import { PrismaClient } from '@prisma/client';

export class UpdateUserController {
	private updateUser: UpdateUser;

	constructor() {
		this.updateUser = new UpdateUser(
			new PrismaUserRepository(new PrismaClient()),
		);
	}

	async update(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const { email, secret } = req.body;
			const user = await this.updateUser.execute({
				id: Number(id),
				email,
				secret,
			});
			return res.status(200).json(user);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
