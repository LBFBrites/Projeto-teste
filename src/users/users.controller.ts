import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    index(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    @ApiBody({ type: UserDto})
    create(@Body() user: UserDto): User {
        return this.usersService.create(user);
    }
    
}


