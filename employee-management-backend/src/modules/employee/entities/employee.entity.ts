import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


// table gets automatically created in database in npm start

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique ID of the employee' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'EMP001', description: 'The employee identifier' })
  employeeId: string;

  @Column()
  @ApiProperty({ example: 'John Doe', description: 'The name of the employee' })
  name: string;

  @Column()
  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the employee' })
  email: string;

  @Column()
  @ApiProperty({ example: 'Software Engineer', description: 'The position of the employee' })
  position: string;

  @Column()
  @ApiProperty({ example: 50000, description: 'The salary of the employee' })
  salary: number;
}
