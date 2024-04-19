import { Types, Document } from 'mongoose';

export interface IOrderPlan extends Document {
    planID: Types.ObjectId
    userID: Types.ObjectId,
    expireTime: number
}