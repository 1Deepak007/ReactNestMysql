import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    findByEmpId(employeeId: string): Promise<Employee>;
    remove(id: number): Promise<void>;
    deletebyemployeeid(employeeId: string): Promise<Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    updateByEmpId(employeeId: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
}
