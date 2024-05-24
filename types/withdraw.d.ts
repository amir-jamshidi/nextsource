import { Document, Types } from "mongoose";
import { IUser } from "./user";
import { IAccount } from "./Account";

export interface IWithdraw extends Document {
    userID: Types.ObjectId | IUser,
    price: number,
    isSuccess: boolean,
    accountID: Types.ObjectId | IAccount
    createdAt?: Date,
    updatedAt?: Date
}