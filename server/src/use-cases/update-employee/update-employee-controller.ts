import { Request, Response } from 'express';
import { UpdateEmployee } from './update-employee';
import { PrismaEmployeeRepository } from '../../repositories/prisma/prisma-employee-repository';
import { PrismaClient } from '@prisma/client';

export class UpdateEmployeeController {
	private updateEmployee: UpdateEmployee;

	constructor() {
		this.updateEmployee = new UpdateEmployee(
			new PrismaEmployeeRepository(new PrismaClient()),
		);
	}

	async update(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;
			const { pis, user_id } = req.body;
			const employee = await this.updateEmployee.execute({
				id: Number(id),
				pis,
				user_id: Number(user_id),
			});
			return res.status(200).json(employee);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
