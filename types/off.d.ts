import { Document, Schema } from "mongoose"

export interface IOff extends Document {
    code: string,
    precent: number,
    productID: Schema.Types.ObjectId,
    expireTime: number,
    maxUse: number,
    times: number,
    userID: Schema.Types.ObjectId
}