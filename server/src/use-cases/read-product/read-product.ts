import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/product-repository";

export class ReadProduct {
  
  private productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
		this.productRepository = productRepository;
	}

	async execute(): Promise<Product[]> {
		return await this.productRepository.read();
	}
}
