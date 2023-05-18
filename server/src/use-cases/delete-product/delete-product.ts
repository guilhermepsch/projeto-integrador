import { DeleteProductDTO } from "./delete-product-dto";
import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "../../entities/product";

export class DeleteProduct {
   private productRepository : ProductRepository;

   constructor(productRepository : ProductRepository){
    this.productRepository = productRepository;}

    async execute(id: number): Promise<void> {
      const product: DeleteProductDTO = {
        id: id,
      };
      await this.productRepository.delete(product.id);

    }
}