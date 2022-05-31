import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({
    timestamps: true,
    versionKey: false
})
export class Todo {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
