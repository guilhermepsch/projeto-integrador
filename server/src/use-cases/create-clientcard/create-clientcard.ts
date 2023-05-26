import { ClientCardRepository } from '../../repositories/clientcard-repository';
import { CreateClientCardDTO} from './create-clientcard-dto';

interface CreateClientCardRequest {
    cvv: string;
    cardholder: string;
    expirationDate: string;
    cpf: string;
    cardnumber: string;
}

export class CreateClientCard {
    private clientcardRepository: ClientCardRepository;

    constructor(clientcardRepository: ClientCardRepository) {
        this.clientcardRepository = clientcardRepository;
    }

    async execute({ cvv, cardholder, expirationDate, cpf, cardnumber }: CreateClientCardRequest): Promise<void> {
        const clientcard: CreateClientCardDTO = {
            cvv,
            cardholder,
            expirationDate,
            cpf,
            cardnumber
        };
        await this.clientcardRepository.create(clientcard);
    }
}