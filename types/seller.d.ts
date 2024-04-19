import { Document, Types } from "mongoose";

export interface ISeller extends Document {
    userID: Types.ObjectId,
    nationalNumber: string,
    cardNumber: string,
    fatherName: string,
    nationalPhoto: string,
    isActive: boolean
}