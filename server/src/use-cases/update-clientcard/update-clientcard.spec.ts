import { describe, expect, it } from 'vitest';
import { UpdateClientCard } from './update-clientcard';
import { InMemoryClientCardRepository } from '../../repositories/in-memory/in-memory-clientcard-repository';
import { ClientCard } from '../../entities/clientcard';

describe('update a client card', () => {
    it('should be able to update a client card', async () => {
        const updateClientCard = new UpdateClientCard(
            new InMemoryClientCardRepository([
                new ClientCard(
                    1,
                    '123',
                    'John Doe',
                    '2017-',
                    '12536572298',
                    '1232334',
                    new Date(),
                    new Date()
                ),
            ]),
        );

        expect(
            updateClientCard.execute({
                id: 1,
                cvv: '123',
                cardholder: 'John Doe',
                expirationDate: '2017-',
                cpf: '12536572298',
                cardnumber: '1232334',
            }),
        ).resolves.toBeInstanceOf(ClientCard);
    });

    it('should not be able to update a card that does not exist', () => {
        const updateClientCard = new UpdateClientCard(new InMemoryClientCardRepository());

        expect(
            updateClientCard.execute({
                id: 1,
                cvv: '123',
                cardholder: 'John Doe',
                expirationDate: '2017-',
                cpf: '12536572298',
                cardnumber: '1232334',
            }),
        ).rejects.toThrowError('Card not found');
    });
});
