import { Document, Types } from "mongoose";
import { IUser } from "./user";


export interface IComment extends Document {
    userID: Types.ObjectId | IUser,
    productID: Types.ObjectId,
    body: string,
    rate: number,
    isAnswer: boolean,
    answerContent: string,
    answerUserID: Types.ObjectId | IUser,
    isAccept: boolean
    createdAt?: Date,
    updatedAt?: Date
}