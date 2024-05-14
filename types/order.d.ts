import { Document, Types } from "mongoose";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IOrder extends Document {
    userID: Types.ObjectId | IUser,
    productID: Types.ObjectId | IProduct,
    price: number,
    count: number,
    totalPrice: number,
    isOff: boolean,
    percentOff: number,
    action: string,
    cashBack: number,
    code: string
    createdAt?: Date
    updatedAt?: Date
}

