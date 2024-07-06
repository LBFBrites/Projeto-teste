import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
        name: string;
    
    @Prop({ required: true })
        email: string;
    
    @Prop({ required: true })
        phone: string;
    
    @Prop({ required: true })
        cpf: string;
    
    @Prop({ required: true })
        zipCode: string;
    
    @Prop({ required: true })
        birthDate: string;
    
    @Prop({ type: String })
        adress?: {
            localidade: string;
            uf: string;
            ddd: string;
            cep: string;
        }
        
}

export const UserSchema = SchemaFactory.createForClass(User);

