import { ClientAddress } from "@prisma/client";
import { CreateClientAdressDTO } from '../use-cases/create-clientadress/create-clientadress-dto';
import { UpdateClientAdressDTO } from '../use-cases/update-clientadress/update-clientadress-dto';

export interface ClientAdressRepository {
    create(clientAddress: CreateClientAdressDTO): Promise<void>;
    findById(id: number): Promise<ClientAddress | null>; 
    read(): Promise<ClientAdress[]>;
    update(clientAddress: UpdateClientAdressDTO): Promise<ClientAddress>;
    delete(id: number)
}