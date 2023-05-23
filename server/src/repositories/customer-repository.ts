import { Customer } from "../entities/customer";
import { CreateCustomerDTO } from "../use-cases/create-customer/create-customer-dto";
import { UpdateCustomerDTO } from "../use-cases/update-customer/update-customer-dto";

export interface CustomerRepository {
    create(customer: CreateCustomerDTO): Promise<void>;
    read(): Promise<Customer[]>;
    update(customer: UpdateCustomerDTO): Promise<Customer>;
    delete(id: number): Promise<void>;
}