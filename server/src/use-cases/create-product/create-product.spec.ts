import { describe, it, expect } from 'vitest';
import { Product } from '../../entities/product';
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-product-repository';
import { CreateProduct } from './create-product';


describe('CreateProductRepository', () => {
  it('should be able to create a new product', async () => {
    const productRepository = new InMemoryProductRepository();
    const createProduct = new CreateProduct(productRepository);
    const product = new Product(
      1,
      'description',
      'name',
      1,
      'photo',
      1,
    );
    await createProduct.execute({
      name: " teste",
      price: 100,
      description: "descricao",
      photo: "photo",
      catalogueId: 1,
    });
    expect(await productRepository.findByName('teste'));
  });

})