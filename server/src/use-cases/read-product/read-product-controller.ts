import { Request, Response } from "express";
import { ReadProduct } from "./read-product";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import { PrismaClient } from "@prisma/client";

export class ReadProductController {
  private readProduct: ReadProduct;

  constructor() {
    this.readProduct = new ReadProduct(
      new PrismaProductRepository(new PrismaClient()),
  );;
  }

  async read(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.readProduct.read();
      return res.status(200).json(products);
    } catch (error : any) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
