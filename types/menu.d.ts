import { Document } from "mongoose";

export interface IMenu extends Document {
    title: string,
    href: string
    products: []
}