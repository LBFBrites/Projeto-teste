import { Controller, Get, Param } from '@nestjs/common';
import { AdressService } from './adress.service';

@Controller('cep')
export class AdressController {
    constructor(private readonly adressService: AdressService) {}
    


    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<any> {
        return this.adressService.findAdressByCep(cep);
    }

}
