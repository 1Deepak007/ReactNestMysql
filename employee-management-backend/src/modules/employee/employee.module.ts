import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

// Imported
import { TypeOrmModule } from '@nestjs/typeorm';            
import { Employee } from './entities/employee.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Employee])],     // Register Employee entity here
  controllers: [EmployeeController],
  providers: [EmployeeService],
})


export class EmployeeModule {}
