import { describe, it, expect } from 'vitest';
import { Customer } from '../../entities/customer';
import { InMemoryCustomerRepository } from '../../repositories/in-memory/in-memory-customer-repository';
import { DeleteCustomer } from './delete-customer';

describe('delete a customer', () => {
    it('should be able to delete a customer', () => {
        const deleteCustomer = new DeleteCustomer(
            new InMemoryCustomerRepository([
                new Customer(
                    //analisar dps
                    1,
                    20,
                    new Date(),
                    new Date(),
                ),
            ]),
        );

        expect(deleteCustomer.execute(1)).resolves.toBeUndefined();
    });

    it('should not be able to delete a customer that does not exist', () => {
        const deleteCustomer = new DeleteCustomer(new InMemoryCustomerRepository());

        expect(deleteCustomer.execute(1)).rejects.toThrowError('Customer not found');
    });
});