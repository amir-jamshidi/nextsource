import { Document } from "mongoose";

export interface IVerify extends Document {
    phone: string,
    code: number,
    times: number,
    expireTime: number
}