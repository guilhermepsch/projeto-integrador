import { UpdateProductDTO } from "./update-product-dto";
import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "../../entities/product";

export class UpdateProduct {
  private productRepository: ProductRepository;

  constructor( productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async update(product: UpdateProductDTO): Promise<Product> {
    return await this.productRepository.update(product);
  }
}