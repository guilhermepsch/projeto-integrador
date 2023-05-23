import { Request, Response } from 'express';
import { ReadCustomer } from './read-customer';
import { PrismaCustomerRepository } from '../../repositories/prisma/prisma-customer-repository';
import { PrismaClient } from '@prisma/client';

export type ReadListRequest = {
    page: number;
    limit: number;
    range: number;
    order: string;
    direction: string;
};

export class readCustomerController {
    private readCustomer: ReadCustomer;

    constructor() {
        this.readCustomer = new ReadCustomer(
            new PrismaCustomerRepository(new PrismaClient()),
        );
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const customers = await this.readCustomer.execute();
            return res.status(200).json(customers);
        }catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}