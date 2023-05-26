import { describe, it, expect } from 'vitest';
import { ClientCard } from '../../entities/clientcard';
import { InMemoryClientCardRepository } from '../../repositories/in-memory/in-memory-clientcard-repository';
import { CreateClientCard } from './create-clientcard';

describe('create a client card', () => {
    it('should create a client card', () => {
        const createClientCard = new CreateClientCard(new InMemoryClientCardRepository());

        expect(
            createClientCard.execute({
                id: 1,
                cvv: '123',
                cardholder: 'John Doe',
                expirationDate: '2017-',
                cpf: '12536572298',
                cardnumber: '1232334'
            }),
        ).resolves.toBeUndefined();
    });

    it('should not be able to create a client card that already exists', () => {
        const createClientCard = new CreateClientCard(
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
            createClientCard.execute({
                id: 1,
                cvv: '123',
                cardholder: 'John Doe',
                expirationDate: '2017-',
                cpf: '12536572298',
                cardnumber: '1232334'
            }),
        ).rejects.toThrowError('Client card already exists');
    });
});