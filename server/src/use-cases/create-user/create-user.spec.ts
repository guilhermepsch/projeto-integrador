import { describe, it, expect } from "vitest";
import { User } from "../../entities/user";
import { InMemoryUserRepository } from "../../repositories/in-memory/in-memory-user-repository";
import { CreateUser } from "./create-user";

describe('create an user', () => {
  it('should be able to create an user', () => {
    const createUser = new CreateUser(new InMemoryUserRepository());

    expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      secret: '123456'
    })).resolves.toBeInstanceOf(User);
  })
});