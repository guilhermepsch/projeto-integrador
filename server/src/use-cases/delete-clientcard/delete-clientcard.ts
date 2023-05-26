import { ClientCardRepository } from '../../repositories/clientcard-repository';
import { DeleteClientCardDTO } from './delete-clientcard-dto';

export class DeleteClientCard {
	private clientcardRepository: ClientCardRepository;

	constructor(clientcardRepository: ClientCardRepository) {
		this.clientcardRepository = clientcardRepository;
	}

	async execute(id: number): Promise<void> {
		const clientcard: DeleteClientCardDTO = {
			id,
		};
		await this.clientcardRepository.delete(clientcard.id);
	}
}
