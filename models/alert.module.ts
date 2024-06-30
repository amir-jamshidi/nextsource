import { IAlert } from '@/types/alert'
import { Schema, models, model } from 'mongoose'

const alertSchema = new Schema<IAlert>({
    body: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    isShow: {
        type: Boolean,
        default: true
    },
    href: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'SUCCESS'
    }
}, { timestamps: true })

const alertModel = models.Alert || model('Alert', alertSchema);

export default alertModel