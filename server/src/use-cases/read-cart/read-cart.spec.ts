import { describe, it, expect } from 'vitest';
import { InMemoryCartRepository } from '../../repositories/in-memory/in-memory-cart-repository';
import { ReadCart } from './read-cart';

describe('read carts', () => {
    it('should be able to read carts', () => {
        const readCart = new ReadCart(new InMemoryCartRepository());

        expect(readCart.execute()).resolves.toBeInstanceOf(Array);
    })
})