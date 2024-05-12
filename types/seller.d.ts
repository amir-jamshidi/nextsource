import { Document, Types } from "mongoose";
import { IUser } from "./user";

export interface ISeller extends Document {
    userID: Types.ObjectId | IUser,
    nationalNumber: string,
    cardNumber: string,
    nationalPhoto: string,
    isActive: boolean,
    score: number,
    sellCount: number,
    href: string
}