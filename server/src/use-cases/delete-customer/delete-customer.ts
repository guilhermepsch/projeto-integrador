import { CustomerRepository } from '../../repositories/customer-repository';
import { DeleteCustomerDTO } from './delete-customer-dto';

export class DeleteCustomer {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute(id_customer: number): Promise<void>{
        const customer: DeleteCustomerDTO = {
            id_customer,
        };
        await this.customerRepository.delete(customer.id_customer);
    }
} 