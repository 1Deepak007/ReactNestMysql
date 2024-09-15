<!-- NESTJS (typeORM) -->
<!--
 npm run start
-->
<!-- 
				STEP-BY-STEP FLOW OF THE APPLICATION
					
BACKEND :   npm run start
	Set up NestJS and install dependencies (typeorm, mysql2, @nestjs/swagger).
	Configure MySQL connection in app.module.ts.
	Create the Employee entity to map to the employees table in the database.
	Create DTOs (CreateEmployeeDto, UpdateEmployeeDto) for request validation.
	Create the Employee service to handle the core business logic (CRUD operations).
	Create the Employee controller to expose API endpoints (/employees, /employees/:id).
	Integrate Swagger by setting it up in main.ts to generate API documentation.
	Run your NestJS application (npm run start) and view Swagger documentation at http://localhost:3000/api.

	
	Backend flow :

	Swagger: Defined in main.ts, it scans the controllers (e.g., employee.controller.ts) for API documentation.
	API routes: Defined in employee.controller.ts, they handle incoming HTTP requests.
	Business logic: Usually implemented in employee.service.ts (which would be part of the EmployeeModule).
	Database entity: Defined in employee.entity.ts and mapped using TypeORM
	
	1.main.ts: 
		*This is the entry point of your application. It sets up the Nest app, enables CORS, and configures Swagger.
	2.app.module.ts: 
		*This is the root module of the application. It imports all other modules, such as the EmployeeModule.
		*The AppModule is the central part of the application that connects different parts of the app together.
	3.employee.module.ts:
		*This is the feature module that encapsulates everything related to the Employee domain.
		*It imports necessary services, controllers, and repositories for the employee logic.
	4.employee.controller.ts:
		*Defines the API routes for the employee entity (e.g., create, update, delete, fetch employees).
		*Each route corresponds to a method in this controller, like @Get(), @Post(), etc., which defines the API's endpoints.
		*Swagger annotations for API documentation can also be defined in this file using decorators like @ApiTags(), @ApiOperation(), etc.
	5.employee.service.ts (not mentioned, but usually exists in this pattern):
		*Contains the business logic. This is where the actual logic for managing employees is implemented (e.g., CRUD operations).
		*The controller calls methods from this service to perform the required operations.
	6.employee.entity.ts:
		*Defines the structure of the employee entity and maps it to the database. This typically uses TypeORM decorators like @Entity(), @Column(), etc.
		*This is where the database schema for employees is managed.
	7.dto folder (create-employee.dto.ts, update-employee.dto.ts):
		*DTOs (Data Transfer Objects) define the structure of the data expected by the API for creating and updating employees.
		*These classes ensure that incoming requests are validated and structured correctly.
	8.employee.controller.spec.ts and app.controller.spec.ts:
		*These files contain unit tests for the controller logic. They verify that the API routes behave as expected.
	9.app.controller.ts and app.service.ts:
		*These are the main controller and service for the app itself, not tied to the employee module.
		*They usually handle general routes or logic not specific to employees.

FRONTEND :
	Set up React with TypeScript and install Axios for HTTP requests.
	Create components (EmployeeList, EmployeeForm) for listing employees, and for adding/editing employee details.
	Use App.tsx for routing between components, allowing navigation between listing and forms.
	Axios is used in the components to perform API requests to the NestJS backend.
-
-
-
-
-
==============================> FRONTEND: REACTJS
1. Create react application :  npx create-react-app employee-management-frontend --template typescript
2. Install the necessary TypeScript dependencies:	npm install typescript @types/react @types/node @types/react-dom
3. React-router-dom , Axios(used for making HTTP requests):    npm install axios, npm install react-router-dom
4. src/types.ts, define types for the employee data model.
5. In index.tsx add <BrowserRouter> <App /> </BrowserRouter> 
6. 
-
-
-
-
-
-
-
-
-
-
-
==============================> BACKEND: NESTJS
1. Setup MySQL Database : employee_management.

2. NestJS Application Setup : nest new employee-management-backend     -select npm or yarn

3. Install necessary packages for MySQL, TypeORM and swagger: 	
		npm install @nestjs/typeorm typescript @types/react @types/node @types/react-dom typeorm mysql2 @nestjs/swagger swagger-ui-express class-validator

4. generate module :
			Create Employee Module: nest generate module employee
			Create Employee Controller: nest generate controller employee
			Create Employee Service: nest generate service employee
			Create Employee Entity: nest generate class employee/entities/employee --no-spec
			
	or create above 3 files with single 
			
			command : nest generate resource employee       (recomended) 
			? What transport layer do you use? REST API
			? Would you like to generate CRUD entry points? Yes

5. employee.module.ts : Register Employee entity here
			// Imported
			import { TypeOrmModule } from '@nestjs/typeorm';            // Imported
			import { Employee } from './entities/employee.entity';      // Imported

			@Module({
			  imports: [TypeOrmModule.forFeature([Employee]),       // Register Employee entity here],
			  controllers: [EmployeeController],
			  providers: [EmployeeService],
			})
			export class EmployeeModule {}

6. app.module.ts : -database configuration,	-register/Link created employee entity	-register employee module 
 
			import { Module } from '@nestjs/common'; import { TypeOrmModule } from '@nestjs/typeorm';
			import { Employee } from './modules/employee/entities/employee.entity'; import { EmployeeModule } from './modules/employee/employee.module';

			@Module({ imports: [
				TypeOrmModule.forRoot({
				  type: 'mysql', host: 'localhost', port: 3306, username: 'root', password: 'password', database: 'employee_db',
				  entities: [Employee],           // register/Link created employee entity
				  synchronize: true, // Automatically syncs your database schema (disable in production)
				}),EmployeeModule,      // register employee module 
			 ],})
			export class AppModule {}

4. define entity (table) in employee.entity.ts            - table gets automatically created in database in npm start

5. In/Create Employee DTOs for Data Validation (create-employee.dto.ts)  - Data Transfer Objects (DTOs) help enforce validation in the incoming data.

6. In/Create DTO for Employee Update in(update-employee.dto.ts)

7. In/Create employee.service.ts - implement the CRUD logic in employee.service.ts by injecting the Employee repository

8. In employee.controller.ts - define the endpoints that will use the service methods to handle HTTP requests.

9. Integrate Swagger : Modify main.ts to include Swagger setup.

10. Run : npm run start

-->