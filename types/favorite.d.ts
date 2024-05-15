import { Document, Types } from "mongoose";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IFavorite extends Document {
    productID: Types.ObjectId | IProduct,
    userID: Types.ObjectId | IUser,
}