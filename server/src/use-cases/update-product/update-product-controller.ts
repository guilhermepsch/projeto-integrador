import {Request , Response} from 'express'
import { UpdateProduct } from './update-product'
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-product-repository'
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository'
import { PrismaClient } from '@prisma/client';
export class UpdateProductController {
  private updateProduct: UpdateProduct;

  constructor() {
    this.updateProduct = new UpdateProduct(
      new PrismaProductRepository(new PrismaClient()),
    );
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price, photo, catalogueId } = request.body;
      const product = await this.updateProduct.execute({
        id: Number(id),
        name,
        description,
        price,
        photo,
        catalogueId,
      });

      return response.status(200).json(product);
    } 
  }




