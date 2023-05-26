import { describe, it, expect } from 'vitest';
import { ClientCard } from '../../entities/clientcard';
import { InMemoryClientCardRepository } from '../../repositories/in-memory/in-memory-clientcard-repository';
import { DeleteClientCard } from './delete-clientcard';

describe('delete a client card', () => {
    it('should delete a client card', () => {
        const deleteCardClient = new DeleteClientCard(
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

        expect(deleteCardClient.execute(1)).resolves.toBeUndefined();

    });

    it('should not be able to delete a client card that does not exist', () => {
        const deleteCardClient = new DeleteClientCard(new InMemoryClientCardRepository());

        expect(deleteCardClient.execute(1)).resolves.toThrowError('Client card not found');
    });
});
