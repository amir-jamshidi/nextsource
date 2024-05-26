import { IRequest } from '@/types/request'
import { Schema, model, models } from 'mongoose'

const requestSchema = new Schema<IRequest>({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    isAnswer: {
        type: Boolean,
        default: false
    },
    answerContent: {
        type: String,
        default: ''
    },
    code: {
        type: String,
        default: () => `RQ${Date.now()}`
    }
}, { timestamps: true });

const requestModel = models.Request || model('Request', requestSchema);

export default requestModel