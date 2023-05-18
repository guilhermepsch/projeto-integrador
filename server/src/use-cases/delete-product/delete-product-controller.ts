import { Request, Response } from "express";
import { PrismaProductRepository } from "../../repositories/prisma/prisma-product-repository";
import {DeleteProductDTO} from "./delete-product-dto";
import { ProductRepository } from "../../repositories/product-repository";
import { PrismaClient } from "@prisma/client";

export class DeleteProductController {

  
  private productRepository : ProductRepository;

  constructor (){
    this.productRepository = new PrismaProductRepository(
      new PrismaClient()
    )
  }

  async delete(req: Request, res: Response): Promise<Response> {

    try{
      const {id} = req.params;
      const product: DeleteProductDTO = {id: Number(id)};
      await this.productRepository.delete(product.id);
      console.log("try");
      return res.json({id}).status(200).send();

    }
    catch (error: any) {
      console.log("catch");
      return res.status(400).json({ message: error.message }); 
    }

  }
}