import { Document, Types } from "mongoose";


export interface IComment extends Document {
    userID: Types.ObjectId,
    productID: Types.ObjectId,
    body: string,
    rate: number,
    isAnswer: boolean,
    answerContent: string,
    answerUserID: Types.ObjectId,
}