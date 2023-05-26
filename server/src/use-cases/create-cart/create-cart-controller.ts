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

    async create(req: Request, res: Response) {
        try {
            const createCartRequest = {
                id_clie: Number(req.body.id_clie),
            };
            await this.createCart.execute(createCartRequest);
            return res.status(201).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}