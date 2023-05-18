import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import { ReadProduct } from './read-product';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository';

export class ReadProductController {
  private readProduct: ReadProduct;
    constructor() {
        this.readProduct = new ReadProduct(
            new PrismaProductRepository(new PrismaClient()),
        );
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const products = await this.readProduct.execute();
            return res.status(200).json(products);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}