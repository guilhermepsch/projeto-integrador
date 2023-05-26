import { ClientCard } from "../entities/clientcard";
import { CreateClientCardDTO } from "../use-cases/create-clientcard/create-clientcard-dto";
import { UpdateClientCardDTO } from '../use-cases/update-clientcard/update-clientcard-dto';

export interface ClientCardRepository {
    create(clientcard: CreateClientCardDTO): Promise<void>;
    findById(id: number): Promise<ClientCard | null>;
    read(): Promise<ClientCard[]>;
    update(clientcard: UpdateClientCardDTO): Promise<ClientCard>;
    delete(id: number): Promise<void>;
}