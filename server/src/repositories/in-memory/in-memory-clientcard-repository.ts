import { ClientCard } from "../../entities/clientcard";
import { CreateClientCardDTO } from '../../use-cases/create-clientcard/create-clientcard';
import { UpdateClientCardDTO } from '../../use-cases/update-clientcard/update-clientcard-dto';
import { ClientCardRepository } from '../clientcard-repository';

export class InMemoryClientCardRepository implements ClientCardRepository {
    private clientcards: ClientCard[] = [];

    constructor(clientcards: ClientCard[] = []) {
        this.clientcards = clientcards;
    }

    async create(clientcard: CreateClientCardDTO): Promise<void> {
        if (this.clientcards.find(clientcardRepo => clientcardRepo.getId() == clientcard))
            throw new Error('Client card already exists');
        const newClientCard = new ClientCard(
            this.clientcards.length + 1,
            clientcard.cvv,
            clientcard.cardholder,
            clientcard.expirationDate,
            clientcard.cpf,
            clientcard.cardnumber,
            new Date(),
            new Date(),
        );
        this.clientcards.push(newClientCard);
    }

    async findById(id: number): Promise<ClientCard | null> {
        const clientcard = this.clientcards.find(clientcard => clientcard.getId() === id);
        if (!clientcard) return null;
        return clientcard;
    }

    async read(): Promise<ClientCard[]> {
        return this.clientcards;
    }

    async update(clientcard: UpdateClientCardDTO): Promise<ClientCard> {
        const index = this.clientcards.findIndex(
            clientcardRepo => clientcardRepo.getId() === clientcard.id,
        );
        if (index === -1) throw new Error('Client card not found');
        const newClientCard = new ClientCard(
            clientcard.id,
            clientcard.cvv,
            clientcard.cardholder,
            clientcard.expirationDate,
            clientcard.cpf,
            clientcard.cardnumber,
            new Date(),
            this.clientcards[index].getCreatedAt(),
            );
            this.clientcards[index] = newClientCard;
            return newClientCard;
    }

    async delete(id: number): Promise<void> {
        const index = this.clientcards.findIndex(clientcard => clientcard.getId() === id);]
        if (index === -1) throw new Error('Client card not found');
        this.clientcards.splice(index, 1);
    }
}