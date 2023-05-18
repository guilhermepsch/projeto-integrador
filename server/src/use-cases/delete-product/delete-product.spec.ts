import { describe, it, expect } from 'vitest';
import { Product } from '../../entities/product';
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-product-repository';
import { DeleteProduct } from './delete-product';

describe('delete an product', () => {
	it('should be able to delete an product', () => {
		const deleteProduct = new DeleteProduct(
			new InMemoryProductRepository([
				new Product(
					1,
          "name",
          "description",
          100,
          "photo",
          1,
				),
			]),
		);
		expect(deleteProduct.execute(1)).resolves.toBeUndefined();

		
	});


	it('should not be able to delete an product that does not exist', () => {
		const deleteProduct = new DeleteProduct(new InMemoryProductRepository());
		expect(deleteProduct.execute(1)).rejects.toThrowError('Product not found');
	});
})


