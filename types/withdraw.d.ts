import { Document, Types } from "mongoose";
import { IUser } from "./user";

export interface IWithdraw extends Document {
    userID: Types.ObjectId | IUser,
    price: number,
    isSuccess: boolean,
    createdAt?: Date,
    updatedAt?: Date
}