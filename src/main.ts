import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port: number = configService.get<number>('SERVER_PORT');

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The Description of your API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  //Endpoint for Swagger Documentation
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port);
  Logger.log('Customers Service Application Running on Port: ' + port);

  // Catch uncaught async errors
  process.on('unhandledRejection', (err) => {
    Logger.error(
      'Customers Service Unhandled Rejection(Likely due to asynchronous promise rejection): ',
    );
    Logger.error((err as Error).stack);
  });
}
bootstrap();
