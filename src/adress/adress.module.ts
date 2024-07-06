import { Module } from '@nestjs/common';
import { AdressService } from './adress.service';
import { HttpModule } from '@nestjs/axios';
import { AdressController } from './adress.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [AdressService],
  controllers: [AdressController]
})
export class AdressModule {}
