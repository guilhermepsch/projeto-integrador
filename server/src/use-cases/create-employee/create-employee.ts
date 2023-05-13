import { EmployeeRepository } from '../../repositories/employee-repository';
import { CreateEmployeeDTO } from './create-employee-dto';

type CreateEmployeeRequest = {
	pis: string;
	user_id: number;
};

export class CreateEmployee {
	private employeeREpository: EmployeeRepository;
	constructor(employeeRepository: EmployeeRepository) {
		this.employeeREpository = employeeRepository;
	}

	async execute({ pis, user_id }: CreateEmployeeRequest) {
		const employee: CreateEmployeeDTO = {
			pis,
			user_id,
		};
		await this.employeeREpository.create({ pis, user_id });
	}
}
