import { Client } from "../../entities/client";
import { ClientRepository } from "../../repositories/client-repository";

export class ReadClient {

  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.read();
    return clients;
  }
}