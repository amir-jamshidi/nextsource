import {Document} from "mongoose";

export interface ICategory extends Document {
    title: string,
    href: string,
    photo: string,
    titleEn: string
    caption: string
    type: string
}