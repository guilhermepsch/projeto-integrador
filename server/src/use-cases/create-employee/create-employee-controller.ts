import { Request, Response } from 'express';
import { CreateEmployee } from './create-employee';
import { PrismaEmployeeRepository } from '../../repositories/prisma/prisma-employee-repository';
import { PrismaClient } from '@prisma/client';

export class CreateEmployeeController {
	private createEmployee: CreateEmployee;
	constructor() {
		this.createEmployee = new CreateEmployee(
			new PrismaEmployeeRepository(new PrismaClient()),
		);
	}
	async create(req: Request, res: Response) {
		try {
			const { pis, user_id } = req.body;
			await this.createEmployee.execute({
				pis: String(pis),
				user_id: Number(user_id),
			});
			return res.status(201).send();
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
