import { Request, Response } from 'express';
import { CreateClientCard } from './create-clientcard';
import { PrismaClientCardRepository } from '../../repositories/prisma/prisma-clientcard-repository';
import { PrismaClient } from '@prisma/client';

export class CreateClientCardController {
    private createClientCard: CreateClientCard;

    constructor() {
        this.createClientCard = new CreateClientCard(
            new PrismaClientCardRepository(new PrismaClient()),
        );
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { cvv, cardholder, expirationDate, cpf, cardnumber } = req.body;
        try {
            await this.createClientCard.execute({ cvv, cardholder, expirationDate, cpf, cardnumber });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(201).send();
    }
}