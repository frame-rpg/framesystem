import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { AuthGuard } from './auth.guard';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { join } from 'path';

console.log(env);

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:9090',
        package: 'framesystem',
        protoPath: join(__dirname, 'proto/service.proto'),
      },
    },
  );
  app.useGlobalGuards(new AuthGuard());
  await app.listenAsync();
}
bootstrap();
