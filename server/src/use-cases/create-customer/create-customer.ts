import { CustomerRepository } from '../../repositories/customer-repository';
import { CreateCustomerDTO } from './create-customer-dto';

interface CreateCustomerRequest {
    id_customer: number;
    age: number;
}

export class CreateCustomer {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute({ id_customer, age }: CreateCustomerRequest): Promise<void> {
        const customer: CreateCustomerDTO = {
            id_customer,
            age,
        };
        await this.customerRepository.create(customer);
    }
}