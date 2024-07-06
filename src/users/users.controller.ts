import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user.dto';
import { ApiBody } from '@nestjs/swagger';
import { AdressService } from 'src/adress/adress.service';



@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly adressService: AdressService,
    ) {}

    @Get()
    index(): UserDto[] {
        return this.usersService.findAll();
    }

    @Post()
    @ApiBody({ type: UserDto})
    async register(@Body() user: UserDto): Promise<string> {
        try{
        const adress = await this.adressService.findAdressByCep(user.zipCode) 
        if(adress) {
             user.adress= {
                cep: user.zipCode,
                localidade: adress.localidade,
                uf: adress.uf,
                ddd: adress.ddd,

            };
        }
        return (await this.usersService.register(user));
    } catch(error){
        throw new Error('Method not implemented.');
    }
}
    
    @Get('/:cpf')
    async findByCpf(@Param('cpf') cpf: string): Promise<any> {
        return this.usersService.findByCpf(cpf);
    }
}


