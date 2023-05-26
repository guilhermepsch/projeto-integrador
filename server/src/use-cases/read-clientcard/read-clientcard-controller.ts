import { Request, Response } from 'express';
import { ReadClientCard } from './read-clientcard';
import { PrismaClientCardRepository } from '../../repositories/prisma/prisma-clientcard-repository';
import { PrismaClient } from '@prisma/client';

export type ReadListRequest = {
    page: number;
    limit: number;
    range: number;
    order: string;
    direction: string;
};

export class ReadClientCardController {
    private readClientCard: ReadClientCard;

    constructor() {
        this.readClientCard = new ReadClientCard(
            new PrismaClientCardRepository(new PrismaClient()),
        );
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const clientcards = await this.readClientCard.execute();
            return res.status(200).json(clientcards);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
