import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  saldo: string;

  @Prop()
  data: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
