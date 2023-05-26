import { Request, Response } from 'express';
import { DeleteClientCard } from './delete-clientcard';
import { PrismaClientCardRepository } from '../../repositories/prisma/prisma-clientcard-repository';
import { PrismaClient } from '@prisma/client';

export class DeleteClientCardController {
    private deleteClientCard: DeleteClientCard;

    constructor() {
        this.deleteClientCard = new DeleteClientCard(
            new PrismaClientCardRepository(new PrismaClient())
        );
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.deleteClientCard.execute(Number(id));
            return res.status(200).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}