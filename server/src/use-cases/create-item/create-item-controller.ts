import {Request , Response} from 'express';
import {CreateItem} from './create-item';
import { PrismaItemRepository } from '../../repositories/prisma/prisma-item-repository';
import { PrismaClient } from '@prisma/client';

export class CreateItemController{
  private createItem: CreateItem;

  constructor(){
   this.createItem = new CreateItem(
      new PrismaItemRepository(new PrismaClient()),
  );;
  }

  async create(request: Request, response: Response): Promise<Response>{
    const {prod_id, cart_id} = request.body;

    try{
      await this.createItem.execute({prod_id, cart_id});
      return response.status(201).send();
    }catch(err){
      return response.status(400).json({
        message: 'Unexpected error on create item'
      })
    }
  }
}