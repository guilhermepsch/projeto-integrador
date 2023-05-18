import { ProductRepository } from "../../repositories/product-repository";
import { Product } from "../../entities/product";
import { UpdateProductDTO } from "./update-product-dto";

interface UpdateProductRequest {
	id: number;
	name: string;
  description: string;
  price: number;
  photo: string;
  catalogueId: number;
}

export class UpdateProduct {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute({id,name,description,price,photo,catalogueId} : UpdateProductRequest): Promise<Product> {
    const product = await this.productRepository.update({id,name,description,price,photo,catalogueId});
    return product;
  }




}