import { describe, it, expect } from 'vitest';
import { ReadProduct } from './read-product';
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-product-repository';

describe('read product', () => {
	it('should be able to read products', () => {
		const readProduct = new ReadProduct(new InMemoryProductRepository());

		expect(readProduct.execute()).resolves.toBeInstanceOf(Array);
	});
});
