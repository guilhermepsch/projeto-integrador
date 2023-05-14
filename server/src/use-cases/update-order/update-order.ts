import { Order } from "../../entities/order";
import { OrderRepository } from "../../repositories/order-repository";
import { UpdateOrderDTO } from "./update-order-dto";

interface UpdateOrderRequest {
    id: number;
    cart_id: number;
    orde_status: number;
    orde_nf: string;
}

export class UpdateOrder {
    private orderRepository: OrderRepository;
    
    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute({ id, cart_id, orde_status, orde_nf }: UpdateOrderRequest): Promise<Order> {
        const order: UpdateOrderDTO = {
            id,
            cart_id,
            orde_status,
            orde_nf,
        };
        return await this.orderRepository.update(order);
    }
}