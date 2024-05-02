import { Document, Types } from "mongoose";

export interface ITag extends Document {
    categoryID: Types.ObjectId,
    title: string,
    titleEn: string
    sourceCount: number,
    href: string
    createdAt?: Date,
    updatedAt?: Date
}