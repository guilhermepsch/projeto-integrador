import { Customer } from "../../entities/customer";
import { CustomerRepository } from '../../repositories/customer-repository';

export class ReadCustomer {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute(): Promise<Customer[]> {
        return await this.customerRepository.read();
    }
}