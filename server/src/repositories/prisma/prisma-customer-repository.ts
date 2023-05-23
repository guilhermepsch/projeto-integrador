import { PrismaClient } from '@prisma/client';
import { CustomerRepository } from '../customer-repository';
import { Customer } from '../../entities/customer';
import { CreateCustomerDTO } from '../../use-cases/create-customer-dto';
import { UpdateCustomerDTO } from '../../use-cases/update-customer-dto';

export class PrismaCustomerRepository implements CustomerRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient){
        this.prisma = prisma;
    }

    async create(customer: CreateCustomerDTO): Promise<void> {
        if(await this.findByIdCustomer(customer.id_customer)) {
            throw new Error('Customer already exists');
        }

        await this.prisma.customer.create({
            data: {
                customer_id_customer: customer.id_customer,
                customer_age: customer.age,
            },
        });
    }

    async findByIdCustomer(id_customer: number): Promise<Customer | null> {
        const customer = await this.prisma.customer.findUnique({
            where: {
                customer_id_customer: id_customer,
            },
        });

        if(!customer){
            return null;
        }

        return new Customer(
            customer.customer_id_customer,
            customer.customer_age,
            customer.created_at,
            customer.updated_at,
        );
    }

    async read(): Promise<Customer[]> {
        const customers = await this.prisma.customer.findMany();
        return customers.map(
            (customer: {
                customer_id_customer: number;
                customer_age: number;
                created_at: Date;
                updated_at: Date;
            }) =>
                new Customer(
                    customer.customer_id_customer,
                    customer.customer_age,
                    customer.created_at,
                    customer.updated_at,
                ),
        );
    }

    async update(customer: UpdateCustomerDTO): Promise<Customer> {
        const updateCustomer = await this.prisma.customer.update({
            where: {
                customer_id_customer: customer.id_customer,
            },
            data: {
                customer_id_customer: customer,
                customer_age: customer.age,
            },
        });

        return new Customer(
            updatedCustomer.customer_id_customer,
            updatedCustomer.customer_age,
            updatedCustomer.created_at,
            updatedCustomer.updated_at,
        );
    }

    async delete(id_customer: number): Promise<void> {
        await this.prisma.customer.delete({
            where: {
                customer_id_customer: id_customer,
            },
        });
    }
}