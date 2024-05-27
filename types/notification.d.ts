import { Document, Types } from "mongoose"
import { IUser } from "./user"

export interface INotification extends Document {
    userID: IUser | Types.ObjectId
    title: string,
    body: string,
    isSeen: boolean,
    href: string,
    createdAt?: Date,
    updatedAt?: Date
}