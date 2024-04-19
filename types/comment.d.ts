import { Document, Types } from "mongoose";


export interface IComment extends Document {
    userID: Types.ObjectId,
    body: string,
    rate: number,
    isAnswer: boolean,
    answerContent: string,
    answerID: Types.ObjectId,
}