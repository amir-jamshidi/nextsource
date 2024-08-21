import { Document } from "mongoose";

interface IAdminNotification extends Document {
    type: 'TICKET' | 'ORDER' | 'REQUEST' | 'USER',
    isShow: boolean,
    createdAt?: Date,
    updatedAt?: Date
}