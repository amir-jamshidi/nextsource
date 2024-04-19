import { Document, Types } from "mongoose";

export interface IProduct extends Document {
    title: string,
    description: string,
    categoryID: [],
    creatorID: Types.ObjectId,
    price: number,
    href: string,
    buyCount: number,
    isPlan: boolean,
    isFree: boolean,
    isOff: boolean,
    precentOff: number,
    photo: string,
    size: number,
    links: []
}