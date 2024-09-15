import { IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'EMP001', description: 'Unique employee identifier' })
  @IsString() // corrected to IsString
  employeeId: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the employee' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'Email address of the employee' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Software Engineer', description: 'Job position of the employee' })
  @IsString()
  position: string;

  @ApiProperty({ example: 50000, description: 'Salary of the employee' })
  @IsNumber()
  salary: number;
}
