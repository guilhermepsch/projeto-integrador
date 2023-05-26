import { PrismaClient } from "@prisma/client";
import { ClientCardRepository } from '../clientcard-repository';
import { ClientCard } from '../../entities/clientcard';
import { CreateClientCardDTO } from '../../use-cases/create-clientcard/create-clientcard-dto';
import { UpdateClientCardDTO } from '../../use-cases/update-clientcard/update-clientcard-dto';

export class PrismaClientCardRepository implements ClientCardRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async create(clientcard: CreateClientCardDTO): Promise<void> {
        if (await this.findById(clientcard.id)) {
            throw new Error('Client card already exists');
        }

        await this.prisma.clientcard.create({
            data: {
                clientcard_cvv: clientcard.cvv,
                clientcard_cardholder: clientcard.cardholder,
                clientcard_expirationDate: clientcard.expirationDate,
                clientcard_cpf: clientcard.cpf,
                clientcard_cardnumber: clientcard.cardnumber,
            },
        });
    }

    async findById(id: number): Promise<ClientCard | null> {
        const clientcard = await this.prisma.clientcard.findUnique({
            where: {
                clientcard_id: id,
            },
        });

        if (!clientcard) {
            return null;
        }

        return new ClientCard(
            clientcard.clientcard_id,
            clientcard.clientcard_cvv,
            clientcard.clientcard_cardholder,
            clientcard.clientcard_expirationDate,
            clientcard.clientcard_cpf,
            clientcard.clientcard_cardnumber,
            clientcard.created_at,
            clientcard.updated_at
        );
    }

    async read(): Promise<ClientCard[]> {
        const clientcards = await this.prisma.clientcard.findMany();
        return clientcards.map(
            (clientcard: {
                clientcard_id: number,
                clientcard_cvv: string,
                clientcard_cardholder: string,
                clientcard_expirationDate: string,
                clientcard_cpf: string,
                clientcard_cardnumber: string,
                created_at: Date,
                updated_at: Date
            }) =>
                new ClientCard(
                    clientcard.clientcard_id,
                    clientcard.clientcard_cvv,
                    clientcard.clientcard_cardholder,
                    clientcard.clientcard_expirationDate,
                    clientcard.clientcard_cpf,
                    clientcard.clientcard_cardnumber,
                    clientcard.created_at,
                    clientcard.updated_at
                ),
        );
    }

    async update(clientcard: UpdateClientCardDTO): Promise<ClientCard> {
        const updateClientCard = await this.prisma.clientcard.update({
            where: {
                clientcard_id: clientcard.id,
            },
            data: {
                clientcard_cvv: clientcard.cvv,
                clientcard_cardholder: clientcard.cardholder,
                clientcard_expirationDate: clientcard.expirationDate,
                clientcard_cpf: clientcard.cpf,
                clientcard_cardnumber: clientcard.cardnumber,
            },
        });

        return new ClientCard(
            updateClientCard.clientcard_id,
            updateClientCard.clientcard_cvv,
            updateClientCard.clientcard_cardholder,
            updateClientCard.clientcard_expirationDate,
            updateClientCard.clientcard_cpf,
            updateClientCard.clientcard_cardnumber,
            updateClientCard.created_at,
            updateClientCard.updated_at
        );
    }

    async delete(id: number): Promise<void> {
        await this.prisma.clientcard.delete({
                    where: {
                        clientcard_id: id,
                    },
                });
    }
}