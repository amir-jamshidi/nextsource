import { Document, Types } from "mongoose";

export interface IFavorite extends Document {
    productID: Types.ObjectId,
    userID: Types.ObjectId,
}