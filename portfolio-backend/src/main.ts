import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  app.enableCors({
    origin: `${process.env.CLIENT_URL}`, // allow your Vite frontend
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
