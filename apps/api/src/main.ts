/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {SWAGGER_FEATURE} from "./app/question-management/question-management.config";
import {USERS_SWGGER_FEATURE} from "./app/users/users.config";
import {AuthConfig} from "./app/auth/auth.config";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const config = new DocumentBuilder()
    .setTitle('UTCN Course API')
    .setDescription('UTCN Course API for Question Management')
    .setVersion('1.0')
    .addTag(SWAGGER_FEATURE)
    .addTag(USERS_SWGGER_FEATURE)
    .addTag(AuthConfig.AUTH_SWAGGER_FEATURE)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();