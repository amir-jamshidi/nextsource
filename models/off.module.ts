import { IOff } from '@/types/off';
import { models, model, Schema } from 'mongoose'

const offSchema = new Schema<IOff>({
    code: {
        type: String,
        required: true
    },
    precent: {
        type: Number,
        required: true
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    expireTime: {
        type: Number,
        required: true
    },
    maxUse: {
        type: Number,
        required: true
    },
    times: {
        type: Number,
        default: 0
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const offModel = models.Off || model('Off', offSchema);

export default offModel