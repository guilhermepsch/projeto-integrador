import { describe, it, expect } from 'vitest';
import { InMemoryClientCardRepository } from '../../repositories/in-memory/in-memory-clientcard-repository';
import { ReadClientCard } from './read-clientcard';

describe('read client card', () => {
    it('should be able to read client cards', () => {
        const readClientCard = new ReadClientCard(new InMemoryClientCardRepository());

        expect(readClientCard.execute()).resolves.toBeInstanceOf(Array);
    });
});