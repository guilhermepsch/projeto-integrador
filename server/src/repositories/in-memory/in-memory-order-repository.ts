import { Order } from "../../entities/order";
import { CreateOrderDTO } from "../../use-cases/create-order/create-order-dto";
import { UpdateOrderDTO } from "../../use-cases/update-order/update-order-dto";
import { OrderRepository } from "../order-repository";

export class InMemoryOrderRepository implements OrderRepository {
    private orders: Order[] = [];

    constructor(orders: Order[] = []){
        this.orders = orders;
    }

    async create(order: CreateOrderDTO): Promise<void>{
        if (this.orders.find(orderRepo => orderRepo.getNf() === order.order_nf))
            throw new Error('Invoice already exists');
        const newOrder = new Order(
            this.orders.length + 1,
            order.cart_id,
            order.order_status,
            order.order_nf,
            new Date(),
            new Date(),
        )
        this.orders.push(newOrder);
        console.log(this.orders);
    }

    async findByNF(order_nf: string): Promise<Order | null>{
        const order = this.orders.find(order => order.getNf() === order_nf);
        return order ?? null;
    }

    async read(): Promise<Order[]>{
        return this.orders;
    }

    async update(order: UpdateOrderDTO): Promise<Order>{
        const index = this.orders.findIndex(
            orderRepo => orderRepo.getId() === order.id,
    );
    if (index === -1) throw new Error('Order not found');
    const newOrder = new Order(
        order.id,
        order.cart_id,
        order.order_status,
        order.order_nf,
        new Date(),
        this.orders[index].getCreatedAt(),
    );
    this.orders[index] = newOrder;
    return newOrder;
    }
    async delete(id: number): Promise<void>{
        const index = this.orders.findIndex(order => order.getId() === id);
        if (index === -1) throw new Error('Order not found');
        this.orders.splice(index, 1);
    }
}