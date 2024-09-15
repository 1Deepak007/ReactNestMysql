import { IsOptional, IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiPropertyOptional({ description: 'Unique employee identifier' })
  @IsOptional()
  @IsString()
  employeeId?: string; // Optional in update
  
  @ApiPropertyOptional({ description: 'Full name of the employee' })
  @IsOptional()
  @IsString()
  name?: string; // Optional in update
  
  @ApiPropertyOptional({ description: 'Email address of the employee' })
  @IsOptional()
  @IsEmail()
  email?: string; // Optional in update
  
  @ApiPropertyOptional({ description: 'Job position of the employee' })
  @IsOptional()
  @IsString()
  position?: string; // Optional in update
  
  @ApiPropertyOptional({ description: 'Salary of the employee' })
  @IsOptional()
  @IsNumber()
  salary?: number; // Optional in update
}
