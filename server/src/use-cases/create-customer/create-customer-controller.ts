import { Request, Response } from 'express';
import { CreateCustomer } from './create-customer'
import { PrismaCustomerRepository } from '../../repositories/prisma/prisma-customer-repository';
import { PrismaClient } from '@prisma/client';

export class CreateCustomerController {
    private createCustomer: CreateCustomer;

    constructor(){
        this.createCustomer = new CreateCustomer(
            new PrismaCustomerRepository(new PrismaClient()),
        );
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { id_customer, age } = req.body;
        try {
            await this.createCustomer.execute({ id_customer, age });
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
        return res.status(201).send();
    }
}