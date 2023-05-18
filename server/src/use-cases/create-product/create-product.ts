import { CatalogueRepository } from '../../repositories/catalogue-repository';
import { ProductRepository } from '../../repositories/product-repository';
import {CreateProductDTO } from './create-product-dto';

interface CreateProductRequest {
	name: string;
  price:number;
  description:string;
  photo:string;
  catalogueId:number;
}

export class CreateProduct{
  private productRepository: ProductRepository;

	constructor(productRepository: ProductRepository) {
		this.productRepository = productRepository;
	}
  async execute({name,price,description,photo,catalogueId} : CreateProductRequest): Promise<void> {
    const product: CreateProductDTO = {
			name,
      price,
      description,
      photo,
      catalogueId,
		};    
    await this.productRepository.create(product)
  }
}
