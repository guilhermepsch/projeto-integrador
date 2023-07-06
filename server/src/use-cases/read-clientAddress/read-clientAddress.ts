import { ClientAddress } from "../../entities/clientAddress";
import { ClientAddressRepository } from "../../repositories/clientAddress-repository";

export class ReadClientAddress {
  private clientAddressRepository: ClientAddressRepository;

  constructor(clientAddressRepository: ClientAddressRepository) {
    this.clientAddressRepository = clientAddressRepository;
  }
  async execute(): Promise<ClientAddress[]> {
    return await this.clientAddressRepository.read();
  }
}
