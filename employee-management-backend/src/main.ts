import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Employee Management API')
    .setDescription('API for managing employees')
    .setVersion('1.0')
    .addTag('Employees')                            // tag that we wee in swagger, under which apis are listed
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3010);
  console.log(`Swagger is running on http://localhost:3010/api/`);
}
bootstrap();