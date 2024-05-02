import { ITag } from '@/types/tag';
import { Schema, model, models } from 'mongoose'

const tagSchema = new Schema<ITag>({
    categoryID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    titleEn: {
        type: String,
        required: true
    },
    sourceCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

const tagModel = models.Tag || model('Tag', tagSchema);

export default tagModel