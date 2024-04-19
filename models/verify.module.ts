import { IVerify } from '@/types/verify'
import { Schema, model, models } from 'mongoose'

const verifySchema = new Schema<IVerify>({
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    code: {
        type: Number,
        required: true
    },
    expireTime: {
        type: Number,
        required: true
    },
    times: {
        type: Number,
        default: 0
    }
})

const verifyModel = models.Verify || model('Verify', verifySchema)

export default verifyModel