import { Customer } from "../../entities/customer";
import { CustomerRepository } from '../../repositories/customer-repository';
import { UpdateCustomerDTO } from './update-customer-dto';

interface UpdateCustomerRequest {
    id_customer: number;
    age: number;
}

export class UpdateCustomer {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute({ id_customer, age }: UpdateCustomerRequest): Promise<Customer> {
        const customer: UpdateCustomerDTO = {
            id_customer,
            age,
        };
        return await this.customerRepository.update(customer);
    }
}