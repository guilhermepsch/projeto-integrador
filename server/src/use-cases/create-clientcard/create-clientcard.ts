import { ClientCardRepository } from '../../repositories/clientcard-repository';
import { CreateClientCardDTO} from './create-clientcard-dto';

interface CreateClientCardRequest {
    id: number;
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

    async execute({ id, cvv, cardholder, expirationDate, cpf, cardnumber }: CreateClientCardRequest): Promise<void> {
        const clientcard: CreateClientCardDTO = {
            id,
            cvv,
            cardholder,
            expirationDate,
            cpf,
            cardnumber
        };
        await this.clientcardRepository.create(clientcard);
    }
}