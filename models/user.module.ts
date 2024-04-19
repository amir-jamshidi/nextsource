import { IUser } from '@/types/user'
import { model, models, Schema } from 'mongoose'

const userSchema = new Schema<IUser>({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'SELLER']
    },
    money: {
        type: Number,
        default: 0
    },
    profile: {
        type: String,
        default: ''
    }
}, { timestamps: true })

const userModel = models.User || model('User', userSchema);

export default userModel