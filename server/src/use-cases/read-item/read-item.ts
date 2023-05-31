import {Item} from "../../entities/item";
import {ItemRepository} from "../../repositories/item-repository";
import { CreateItemDTO } from "../create-item/create-item-dto";


export class ReadItem{
  private itemRepository: ItemRepository;
  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute(): Promise<Item[]> {
    return await this.itemRepository.read();
  } 

}
 

