import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Incidentes AMT APP Documentacion')
  .setDescription('REST-API Aplicativo Incidentes AMT')
  .setVersion('1.0')
  .addTag('personas')
  .addTag('notificaciones')
  .addTag('incidentes')
  .addTag('catalogo')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
