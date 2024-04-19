import { Document } from "mongoose";

export interface IPlan extends Document {
    title: string,
    caption: string,
    photo: string,
    color: string,
    time: string,
    planTime: number,
    price: number,
    isOff: boolean,
    percentOff: number
}