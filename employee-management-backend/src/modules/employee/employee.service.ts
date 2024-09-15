// implement the CRUD logic here by injecting the Employee repository

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }

  // POST : create employee api
  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  // GET : get all employees api
  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // GET : get employee by id
  findById(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  // GET : get employee by employeeId
  findByEmployeeId(employeeId: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { employeeId } });
  }

  // PATCH : Update by id
  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.findById(id);
  }

  // DELETE : Delete by id
  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }

  // DELETE : BY employeeId
  async deleteByEmployeeId(employeeId: string): Promise<Employee>{     // use deleteByEmployeeId in employee.controller.ts
    await this.employeeRepository.delete({ employeeId });
    return this.findByEmployeeId(employeeId);
  }

  // PATCH : Update by employeeId
  async updateByEmployeeId(employeeId: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update({ employeeId }, updateEmployeeDto);
    return this.findByEmployeeId(employeeId);
  }
}
