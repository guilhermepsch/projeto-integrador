import { describe, it, expect } from 'vitest';
import { Order } from '../../entities/order';
import { InMemoryOrderRepository } from '../../repositories/in-memory/in-memory-order-repository';
import { CreateOrder } from './create-order';

describe('create an order', () => {
    it('should be able to create an order', () => {
        const createOrder = new CreateOrder(new InMemoryOrderRepository());

        expect(
            createOrder.execute({
                order_nf: '123456',
                order_status: 1,
                cart_id: 1,
            }),
        ).resolves.toBeUndefined();
    });

    it('should not be able to create an order with an orde_nf that already exists', () => {
        const createOrder = new CreateOrder(
            new InMemoryOrderRepository([
                new Order(
                    1,
                    1,
                    1,
                    '123456',
                    new Date(),
                    new Date(),
                ),
            ]),
        );
        
        expect(
            createOrder.execute({
                    order_nf: '123456',
                    order_status: 1,
                    cart_id: 1,
                })
        ).rejects.toThrowError('Invoice already exists');
    });
});