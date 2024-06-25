import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
        name: string;
    @ApiProperty()
        email: string;
    @ApiProperty()
        phone: number;
    @ApiProperty()
        CEP: number;
    @ApiProperty()
        CPF: number;
    @ApiProperty()
        birthDate: Date;
}