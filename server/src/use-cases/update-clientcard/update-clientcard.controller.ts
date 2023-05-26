import { Request, Response } from 'express';
import { UpdateClientCard } from './update-clientcard';
import { PrismaClientCardRepository } from '../../repositories/prisma/prisma-clientcard-repository';
import { PrismaClient } from '@prisma/client';

export class UpdateClientCardController {
    private updateClientCard: UpdateClientCard;

    constructor() {
        this.updateClientCard = new UpdateClientCard(
            new PrismaClientCardRepository(new PrismaClient()),
        );
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { cvv, cardholder, expirationDate, cpf, cardnumber } = req.body;
            const clientCard = await this.updateClientCard.execute({
                id: Number(id),
                cvv,
                cardholder,
                expirationDate,
                cpf,
                cardnumber,
            });
            return res.status(200).json(clientCard);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
                    
