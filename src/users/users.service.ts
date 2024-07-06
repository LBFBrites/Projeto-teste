import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async register(createUserDto: UserDto): Promise<string> {
        const createdUser = new this.userModel(createUserDto);
        return (await createdUser.save())._id.toHexString();
    }
   

    findAll(): UserDto[] {
        throw new Error('Method not implemented.');
    }

    

    async findByCpf(cpf: string): Promise<UserDto> {
        throw new Error('Method not implemented.');
    
}
    
}
