import { Document, Types } from "mongoose";
import { IUser } from "./user";

export interface IAccount extends Document {
    userID: Types.ObjectId | IUser
    cardNumber: string,
    cardBank: string,
    cardShaba: string,
    cardName: string,
    isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date
}