import { Request, Response } from 'express';
import { CreateCart } from './create-cart';
import { PrismaClient } from '@prisma/client';
import { PrismaCartRepository } from '../../repositories/prisma/prisma-cart-repository';

export class CreateCartController {
    private createCart: CreateCart;

    constructor() {
        this.createCart = new CreateCart(
            new PrismaCartRepository(new PrismaClient())
        );
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { id_clie } = req.body;
        try {
            await this.createCart.execute({ id_clie });
        } catch (error: any) {
            return res.status(400).json({ message: error.message});
        }
        return res.status(201).send();
    }
}