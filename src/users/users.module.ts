import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AdressService } from 'src/adress/adress.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AdressModule } from 'src/adress/adress.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    HttpModule, AdressModule
  ],
  controllers: [UsersController],
  providers: [UsersService, AdressService]
})
export class UsersModule {}
