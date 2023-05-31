import { ItemRepository } from "../../repositories/item-repository";
import { DeleteItemDTO } from "./delete-item-dto";


export class DeleteItem {
  private itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute(id: number): Promise<void> {
    const item = await this.itemRepository.findById(id);
    if (!item) throw new Error('Item not found');
    await this.itemRepository.delete(id);
  }
}
