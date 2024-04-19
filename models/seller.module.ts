import { ISeller } from '@/types/seller';
import { models, model, Schema } from 'mongoose'

const sellerSchema = new Schema<ISeller>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nationalNumber: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    nationalPhoto: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const sellerModel = models.Seller || model('Seller', sellerSchema);

export default sellerModel