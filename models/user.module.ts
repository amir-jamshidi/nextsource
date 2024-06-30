import { IUser } from '@/types/user'
import { model, models, Schema } from 'mongoose'

const userSchema = new Schema<IUser>({
    fullname: {
        type: String,
        default: 'کاربرجدید',
        required: true
    },
    email: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'SELLER'],
        default: "USER"
    },
    money: {
        type: Number,
        default: 0
    },
    profile: {
        type: String,
        default: 'https://i.postimg.cc/Y9VKvST9/icons8-male-user-100.png'
    },
    bio: {
        type: String,
        default: ''
    },
    technologies: {
        type: [String],
        default: []
    }
}, { timestamps: true })

const userModel = models.User || model('User', userSchema);

export default userModel