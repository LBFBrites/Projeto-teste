import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { ReturnCep } from 'src/dto/return-cep.dto';



@Injectable()
export class CepService {
    URL_CEP = 'http://viacep.com.br/ws/{CEP}/json/'

    constructor(private readonly httpService: HttpService) {}

    async findAdressByCep(cep: string): Promise<ReturnCep> {
        return this.httpService.axiosRef.get<ReturnCep>(this.URL_CEP.replace('{CEP}', cep))
        .then((result) => {
            console.log(result);
            if(result.data.error === 'true')
                throw new NotFoundException('CEP not found')
            return result.data;
        }).catch((error: AxiosError) => {
            throw new BadRequestException(`Error in connection request ${error.message}`)
        });
    }

}