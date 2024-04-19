import { Document, Types } from "mongoose";

export interface ITicket extends Document {
    sectionID: Types.ObjectId,
    body: string,
    orderID: Types.ObjectId,
    file: string[],
    isAnswer: boolean,
    answerContent: string,
    userID: Types.ObjectId
}