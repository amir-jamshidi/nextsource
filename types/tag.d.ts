import {Document} from 'mongoose'

export interface ITag extends Document {
    href: string,
    title: string,
}