import { Document, Types } from "mongoose";
import { IUser } from "./user";

export interface IRequest extends Document {
    userID: Types.ObjectId | IUser
    title: string,
    caption: string,
    price: number,
    isAnswer: boolean,
    answerContent: string,
    code: string,
    createdAt?: Date,
    updatedAt?: Date
}