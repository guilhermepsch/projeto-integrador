import { ClientCard } from "../../entities/clientcard";
import { ClientCardRepository } from "../../repositories/clientcard-repository";

export class ReadClientCard {
    private clientCardRepository: ClientCardRepository;

    constructor(clientCardRepository: ClientCardRepository) {
        this.clientCardRepository = clientCardRepository;
    }

    async execute(): Promise<ClientCard[]> {
        return await this.clientCardRepository.read();
    }
}