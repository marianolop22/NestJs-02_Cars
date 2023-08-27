import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Esto es para que siempre se ejecuten los pipes de validacion a nivel global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // limpia el body de los datos que no necesito
      forbidNonWhitelisted: true // si mandas campos demás, te tira error
    })
  )
  await app.listen(3500);
}
bootstrap();
