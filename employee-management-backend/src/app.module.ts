import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './modules/employee/entities/employee.entity';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'employee_management',
      entities: [Employee],           // register/Link created employee entity
      synchronize: true, // Automatically syncs your database schema (disable in production)
    }),
    EmployeeModule,      // register employee module 
  ],
})

export class AppModule {}