import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import { PrismaOrderRepository } from "../../repositories/prisma/prisma-order-repository";
import { ReadOrder } from "./read-order";

export type ReadListRequest = {
    page: number;
    limit: number;
    range: number;
    order: string;
    direction: string;
};

export class ReadOrderController {
    private readOrder: ReadOrder;

    constructor() {
        this.readOrder = new ReadOrder(
            new PrismaOrderRepository(new PrismaClient()),
        );
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const orders = await this.readOrder.execute();
            return res.status(200).json(orders);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}