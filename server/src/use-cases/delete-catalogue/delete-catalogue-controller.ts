import {Request, Response } from "express";
import { Catalogue } from "../../entities/catalogue";
import { CatalogueRepository } from "../../repositories/catalogue-repository";
import { DeleteCatalogueDTO } from "./delete-catalogue-dto";
import { PrismaCatalogueRepository } from "../../repositories/prisma/prisma-catalogue-repository";
import { DeleteCatalogue } from "./delete-catalogue";
import { PrismaClient } from "@prisma/client";
import { InMemoryCatalogueRepository } from "../../repositories/in-memory/in-memory-catalogue-repository";

export class DeleteCatalogueController{
      private deleteCatalogue: DeleteCatalogue;

    constructor() {
      this.deleteCatalogue = new DeleteCatalogue(
        new InMemoryCatalogueRepository()
      );
    }
  
    async delete(req: Request, res: Response): Promise<Response> {
      const {id} = req.params;
      const catalogue: DeleteCatalogueDTO = {
        id: Number(id),
      };
      await this.deleteCatalogue.execute(catalogue.id);
      return res.json({id}).status(200).send();
    }
  

}