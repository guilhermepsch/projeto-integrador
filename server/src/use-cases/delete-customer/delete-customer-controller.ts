import { Request, Response } from 'express';
import { DeleteCustomer } from './delete-customer';
import { PrismaCustomerRepository } from '../../repositories/prisma/prisma-customer-repository';
import { PrismaClient } from '@prisma/client';

export class DeleteCustomerController {
    private deleteCustomer: DeleteCustomer;

    constructor() {
        this.deleteCustomer = new DeleteCustomer(
            new PrismaCustomerRepository(new PrismaClient()),
        );
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try{
            const { id_customer } = req.params;
            await this.deleteCustomer.execute(Number(id_customer));
            return res.status(200).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}