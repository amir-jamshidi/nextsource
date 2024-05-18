import { Document, Types } from "mongoose";

export interface IWithdraw extends Document {
    userID: Types.ObjectId,
    price: number,
    isSuccess: boolean
}