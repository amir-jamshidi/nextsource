import { Document, Types } from "mongoose";

export interface IOrder extends Document {
    userID: Types.ObjectId,
    productID: Types.ObjectId,
    price: number,
    count: number,
    totalPrice: number,
    isOff: boolean,
    percentOff: number,
    action: string,
    cashBack: number,
    createdAt?: Date
    updatedAt?: Date
}

