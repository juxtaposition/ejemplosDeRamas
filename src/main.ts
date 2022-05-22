import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppConfiguration } from './configuration/app.configuration';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger:  console});

  const appConfiguration = app.get(AppConfiguration);
  const limit = appConfiguration.bodyLimit;
  app.use(json({ limit }));
  app.useLogger(console);
  await app.listen(appConfiguration.port);
}

bootstrap();
