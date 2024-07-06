import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
        name: string;
    @ApiProperty()
        email: string;
    @ApiProperty()
        phone: string;
    @ApiProperty()
        cpf: string;
    @ApiProperty()
        zipCode: string;
    @ApiProperty()
        birthDate: string;
       
    adress?: {
        localidade?: string;
        uf?: string;
        ddd?: string;
        cep?: string;
    }
        
}