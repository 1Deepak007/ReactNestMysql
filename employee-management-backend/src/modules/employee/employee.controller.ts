// define the endpoints that will use the service methods to handle HTTP requests.
// BELOW APIS WILL BE REFLECTED IN SWAGGER

import { ApiTags } from '@nestjs/swagger';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Controller, Get, Post, Body, Patch, Param, Delete, Catch, HttpException, HttpStatus } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@ApiTags('Employees')  // Group all endpoints under "Employees" in Swagger
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // CREATE EMPLOYEE API
  // @Post()
  // create(@Body() createEmployeeDto: CreateEmployeeDto) {
  //   return this.employeeService.create(createEmployeeDto);
  // }
  // OR 
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    try {
      return await this.employeeService.create(createEmployeeDto);
    } catch (error) {
      // You can log the error for debugging purposes
      console.error(error);

      // Throw a custom HttpException with a specific message
      throw new HttpException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create employee. Check your EmployeeId is unique.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // GET ALL EMPLOYEES
  @Get()
  findAll() {
    try {
      return this.employeeService.findAll();
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error fetching all employees.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // GET EMPLOYEES BY id
  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.employeeService.findById(id);
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found.',
      }, HttpStatus.NOT_FOUND);
    }
  }

  // FIND EMPLOYEE BY employeeId
  @Get('employeeId/:employeeId')
  async findByEmpId(@Param('employeeId') employeeId: string) {
    try {
      return await this.employeeService.findByEmployeeId(employeeId);
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error finding employee by employeeId.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // DELETE EMPLOYEE BY id
  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return await this.employeeService.remove(id);
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found.',
      }, HttpStatus.NOT_FOUND);
    }
  }
  
  // DELETE EMPLOYEE BY employeeId
  @Delete('employeeId/:employeeId')
  async deletebyemployeeid(@Param('employeeId') employeeId: string) {
    try {
      return await this.employeeService.deleteByEmployeeId(employeeId);    //used deleteByEmployeeId of employee.service.ts here
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found.',
      }, HttpStatus.NOT_FOUND);
    }
  }

  // UPDATE EMPLOYEE BY id
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return await this.employeeService.update(id, updateEmployeeDto);
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error updating employee.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // UPDATE EMPLOYEE BY employeeId
  @Patch('employeeId/:employeeId')
  async updateByEmpId(@Param('employeeId') employeeId: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return await this.employeeService.updateByEmployeeId(employeeId, updateEmployeeDto);
    } catch (error) {
      console.error(error);
      throw new HttpException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error updating employee by employeeId.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}