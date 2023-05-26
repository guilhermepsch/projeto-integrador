import { ClientCard } from "../../entities/clientcard";
import { ClientCardRepository } from "../../repositories/clientcard-repository";
import { UpdateClientCardDTO } from "./update-clientcard-dto";

interface UpdateClientCardRequest {
    id: number;
    cvv: string;
    cardholder: string;
    expirationDate: string;
    cpf: string;
    cardnumber: string;
}

export class UpdateClientCard {
    private clientcardRepository: ClientCardRepository;

    constructor(clientcardRepository: ClientCardRepository) {
        this.clientcardRepository = clientcardRepository;
    }

    async execute({ id, cvv, cardholder, expirationDate, cpf, cardnumber }: UpdateClientCardRequest): Promise<ClientCard> {
        const clientcard: UpdateClientCardDTO = {
            id,
            cvv,
            cardholder,
            expirationDate,
            cpf,
            cardnumber
        };
        return await this.clientcardRepository.update(clientcard);
    }
}