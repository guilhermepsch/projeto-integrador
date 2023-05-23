import { describe, expect, it } from 'vitest';
import { UpdateCustomer } from './update-customer';
import { InMemoryCustomerRepository } from '../../repositories/in-memory/in-memory-customer-repository';
import { Customer } from '../../entities/customer';

describe('update a customer', () => {
    it('should be able to update a customer', async() => {
        const updateCustomer = new UpdateCustomer(
            new InMemoryCustomerRepository([
                new Customer(
                    //revisar
                    1,
                    20,
                    new Date(),
                    new Date(),
                ),
            ]),
        );

        expect(
            updateCustomer.execute({
                id_customer: 1,
                age: 20,
            }),
        ).resolves.toBeInstanceOf(Customer);
    });

    it('should not be able to update a customer that does not exist', () => {
        const updateCustomer = new UpdateCustomer(new InMemoryCustomerRepository());

        expect(
            updateCustomer.execute({
                id_customer: 1,
                age: 20,
            }),
        ).rejects.toThrowError('Customer not found');
    });
});