import { OrderRepository } from '../../repositories/order-repository';

export class DeleteOrder {
    private orderRepository: OrderRepository;

    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(id: number): Promise<void> {
        const order = {
            id,
        };
        await this.orderRepository.delete(order.id);
    }
}