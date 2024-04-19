import Document from "next/document";

export interface ICategory extends Document {
    title: string,
    href: string,
    photo: string,
    caption: string
}