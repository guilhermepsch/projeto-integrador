import { PrismaClient } from '@prisma/client';
import { ItemRepository} from '../item-repository';
import { Item } from '../../entities/item';
import { CreateItemDTO } from '../../use-cases/create-item/create-item-dto';
import { UpdateItemDTO } from '../../use-cases/update-item/update-item-dto';


export class PrismaItemRepository implements ItemRepository{
  private prisma: PrismaClient;
  
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }


  async create(item: CreateItemDTO): Promise<void> {
    if (item.prod_id === null || item.prod_id === undefined) {
      throw new Error("Product ID is invalid");
    }

   if(item.cart_id === undefined){
    throw new Error("Cart ID is invalid");

   }

    await this.prisma.item.create({
      data: {
        prod_id: item.prod_id,
        cart_id: item.cart_id
      }
    })

  }
  async read(): Promise<Item[]> {
    const items = await this.prisma.item.findMany();
    return items.map(item => new Item(item.item_id, item.prod_id, item.cart_id));

  }
  async delete(id: number): Promise<void> {
    const itemExists = await this.prisma.item.findUnique({
      where: {
        item_id: id
      }
    })

    if (itemExists) {
      throw new Error("Item not found");
    }

    await this.prisma.item.delete({
      where: {
        item_id: id
      }
    })


  }

  async findById(id: number): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({
      where: {
        item_id: id
      }
    })

    if (!item) {
      return null;
    }

    return new Item(item.item_id, item.prod_id, item.cart_id);
  }





  async update(item: UpdateItemDTO): Promise<Item> {
    const updateItem = await this.prisma.item.update({
      where: {
          item_id: item.id,
      },
      data: {
          cart_id: item.id_cart,
          prod_id: item.id_product
      },
  });

  return new Item(
    updateItem.item_id, 
    updateItem.prod_id,
    updateItem.cart_id,
  );
    
  }

}