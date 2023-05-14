import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import { CreateOrder } from "./create-order";
import { PrismaOrderRepository } from "../../repositories/prisma/prisma-order-repository";

export class CreateOrderController {
    private createOrder: CreateOrder;

    constructor() {
        this.createOrder = new CreateOrder(
            new PrismaOrderRepository(new PrismaClient()),
        );
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { order_nf, order_status, cart_id } = req.body;
        try {
            await this.createOrder.execute({ order_nf, order_status: Number(order_status), cart_id: Number(cart_id) });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(201).send();
    }
}