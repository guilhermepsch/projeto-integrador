import { Request, Response } from "express";
import {CreateProduct} from './create-product';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository';
import { PrismaClient } from '@prisma/client';



export class CreateProductController {

  private createProduct: CreateProduct;

  constructor() {
    this.createProduct = new CreateProduct(
      new PrismaProductRepository(new PrismaClient()),
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name,price,description,photo,catalogueId } = req.body;
    try {
      await this.createProduct.execute({ name,price,description,photo,catalogueId });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(201).send();

  }
}