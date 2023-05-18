import { OrderRepository } from '../../repositories/order-repository';
import { CreateOrderDTO } from './create-order-dto';

interface CreateOrderRequest {
    order_nf: string;
    order_status: number;
    cart_id: number;
}

export class CreateOrder {
    private orderRepository: OrderRepository;

    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute({ order_nf, order_status, cart_id }: CreateOrderRequest): Promise<void> {
        const order: CreateOrderDTO = {
            order_nf,
            order_status,
            cart_id,
        };
        await this.orderRepository.create(order);
    }
}
