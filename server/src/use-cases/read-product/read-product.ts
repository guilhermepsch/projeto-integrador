import { Product } from '../../entities/product';
import { ProductRepository } from '../../repositories/product-repository';

export class ReadProduct {
	constructor(private productRepository: ProductRepository) {
		this.productRepository = productRepository;
	}

	async read(): Promise<Product[]> {
		return await this.productRepository.read();
	}

	async readById(id: number): Promise<Product | null> {
		return await this.productRepository.readById(id);
	}
}
