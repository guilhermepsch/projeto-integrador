import { EmployeeRepository } from '../../repositories/employee-repository';
import { DeleteEmployeeDTO } from './delete-employee-dto';

export class DeleteEmployee {
	private employeeRepository: EmployeeRepository;

	constructor(userRepository: EmployeeRepository) {
		this.employeeRepository = userRepository;
	}

	async execute(id: number): Promise<void> {
		const user: DeleteEmployeeDTO = {
			id,
		};
		await this.employeeRepository.delete(user.id);
	}
}
