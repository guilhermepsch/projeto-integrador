import { Employee } from '../../entities/employee';
import { EmployeeRepository } from '../../repositories/employee-repository';
import { UpdateEmployeeDTO } from './update-employee-dto';

interface UpdateEmployeeRequest {
	id: number;
	pis: string;
	user_id: number;
}

export class UpdateEmployee {
	private employeeRepository: EmployeeRepository;

	constructor(employeeRepository: EmployeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	async execute({
		id,
		pis,
		user_id,
	}: UpdateEmployeeRequest): Promise<Employee> {
		const user: UpdateEmployeeDTO = {
			id,
			pis,
			user_id,
		};
		return await this.employeeRepository.update(user);
	}
}
