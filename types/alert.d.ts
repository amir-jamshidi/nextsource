import { Document } from "mongoose"

export interface IAlert extends Document{
    title: string,
    body: string,
    href: string,
    type: `ERROR` | 'SUCCESS' | 'WARNING'
    isShow: boolean,
    createdAt?: Date,
    updatedAt?: Date
}