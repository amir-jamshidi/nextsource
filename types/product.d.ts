import { Document, Types } from "mongoose";
import { ICategory } from "./category";
import { IUser } from "./user";
import { ISeller } from "./seller";

export interface IProduct extends Document {
    title: string,
    description: string,
    categoryID: Types.ObjectId | ICategory,
    creatorID: Types.ObjectId | IUser,
    price: number,
    href: string,
    buyCount: number,
    isPlan: boolean,
    isFree: boolean,
    isOff: boolean,
    precentOff: number,
    photo: string,
    size: number,
    links: [],
    preView: string,
    tags: [],
    rate: number,
    cashBack: number,
    sellerID: ISeller | Types.ObjectId
    readonly createdAt?: Date
    readonly updatedAt?: Date
}