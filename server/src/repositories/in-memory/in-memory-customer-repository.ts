import { Customer } from '../../entities/customer';
import { CreateCustomerDTO } from '../../use-cases/create-customer/create-customer-dto';
import { UpdateCustomerDTO } from '../../use-cases/update-customer/update-customer-dto';
import { CustomerRepository } from '../customer-repository';

export class InMemoryCustomerRepository implements CustomerRepository {
    private customers: Customer[] = [];

    constructor(customers: Customer[] = []){
        this.customers = customers;
    }

    async create(customer: CreateCustomerDTO): Promise<void> {
        if(this.customers.find(customerRepo => customerRepo.getIdCustomer() === customer.id_customer))
            throw new Error('Customer already exists');
        const newCustomer = new Customer(
            this.customers.length + 1,
            customer.id_customer,
            customer.age,
            new Date(),
            new Date(),
        );
        this.customers.push(newCustomer);
    }

    async findByIdCustomer(id_customer: number): Promise<Customer | null>{
        const customer = this.customers.find(customer => customer.getIdCustomer() === id_customer);
        if(!customer) return null;
        return customer;
    }

    async read(): Promise<Customer[]> {
        return this.customers;
    }

    async update(customer: UpdateCustomerDTO): Promise<Customer> {
        const index = this.customers.findIndex(
            customerRepo => customerRepo.getIdCustomer() === customer.id_customer,
        );
        if (index === 1) throw new Error ('Customer not found');
        const newCustomer = new Customer(
            customer.id_customer,
            customer.age,
            new Date(),
            this.customers[index].getCreatedAt(),
        );
        this.customers[index] = newCustomer;
        return newCustomer;
    }

    async delete(id_customer: number): Promise<void> {
        const index = this.customers.findIndex(customer => customer.getIdCustomer() === id_customer);
        if(index === -1) throw new Error('Customer not found');
        this.customers.splice(index, 1);
    }
}