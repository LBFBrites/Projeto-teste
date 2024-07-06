import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdressModule } from './adress/adress.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, AdressModule, MongooseModule.forRoot('mongodb://localhost:27017')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
