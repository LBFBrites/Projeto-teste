import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
    private users: User[] = []

    findAll(): User[] {
        return this.users
    }

    create(user: User): User{
        this.users.push()
        return user;
    }
}
