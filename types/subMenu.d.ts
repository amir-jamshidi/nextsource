import { Document, Types } from "mongoose";

export interface ISubMenu extends Document {
    menuID: Types.ObjectId,
    title: string,
    href: string
}