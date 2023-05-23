import { describe, it, expect } from 'vitest';
import { Customer } from '../../entities/customer';
import { InMemoryCustomerRepository } from '../../repositories/in-memory/in-memory-customer-repository';
import { CreateCustomer } from './create-customer';

describe('create a customer', () => {
    it('should be able to create a customer', () => {
        const createCustomer = new CreateCustomer(new InMemoryCustomerRepository());

        expect(
            createCustomer.execute({
                id_customer: 1,
                age: 20,
            }),
        ).resolves.toBeUndefined();
    });
  }
)
