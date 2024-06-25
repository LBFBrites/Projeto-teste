import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [UsersModule, CepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
