import { Document, Types } from "mongoose"

export interface IOff extends Document {
    code: string,
    precent: number,
    productID: Types.ObjectId,
    expireTime: number,
    maxUse: number,
    times: number,
    userID: Types.ObjectId
}