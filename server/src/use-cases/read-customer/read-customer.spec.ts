import { describe, it, expect } from 'vitest';
import { InMemoryCustomerRepository } from '../../repositories/in-memory/in-memory-customer-repository';
import { ReadCustomer } from './read-customer';

describe('read customers', () => {
    it('should be able to read customers', () => {
        const readCustomer = new ReadCustomer(new InMemoryCustomerRepository());

        expect(readCustomer.execute()).resolves.toBeInstanceOf(Array);
    });
});