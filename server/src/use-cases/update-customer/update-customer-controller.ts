import { Request, Response } from 'express';
import { UpdateCustomer } from './update-customer';
import { PrismaCustomerRepository } from '../../repositories/prisma/prisma-customer-repository';
import { PrismaClient } from '@prisma/client';

export class UpdateCustomerController {
    private updateCustomer: UpdateCustomer;

    constructor(){
        this.updateCustomer = new UpdateCustomer(
            new PrismaCustomerRepository(new PrismaClient()),
        );
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id_customer } = req.params;
            const { age } = req.body;
            const customer = await this.updateCustomer.execute({
                id_customer: Number(id_customer),
                age,
            });
            return res.status(200).json(customer);
        }catch (error: any) {
            return res.status(400).json({message: error.message });
        }
    }
}