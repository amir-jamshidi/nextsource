import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    title: string,
    description: string,
    categoryID: [],
    creatorID: Schema.Types.ObjectId,
    price: number,
    href: string,
    buyCount: number,
    isPlan: boolean,
    isOff: boolean,
    precentOff: number,
    photo: string,
    size: number
}