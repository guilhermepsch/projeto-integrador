import { Request, Response } from "express";
import { CreateCatalogue } from "./create-catalogue";
import { InMemoryCatalogueRepository } from "../../repositories/in-memory/in-memory-catalogue-repository";
export class CreateCatalogueController{

  private createCatalogue: CreateCatalogue;

  constructor() {
    this.createCatalogue = new CreateCatalogue(
      new InMemoryCatalogueRepository()
    );
  }
  
  async create(req: Request, res: Response): Promise<Response> {
  const {title} = req.body;
    await this.createCatalogue.execute({title});
    return res.json({title}).status(201).send();
  }


}