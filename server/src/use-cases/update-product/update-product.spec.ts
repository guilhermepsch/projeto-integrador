import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-product-repository';
import { UpdateProduct } from './update-product';
import { Product } from '../../entities/product';

describe('UpdateProduct', () => {
  it('should be able to update an catalogue', async () => {
		const updateProduct = new UpdateProduct(
			new InMemoryProductRepository(
        [ new Product(
          1,
          'description',
          'name',
          1,
          'photo',
          1,
        ),]
      ),
		);

    expect(
      updateProduct.execute({
        id: 1,
        description: 'description update',
        name: 'name update',
        price: 2,
        photo: 'photo update',
        catalogueId: 2,
      }),
    ).resolves.toBeInstanceOf(Product);
      });
});

  