import { IComment } from '@/types/comment';
import { model, models, Schema } from 'mongoose'

const commentSchema = new Schema<IComment>({
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: 5
    },
    isAnswer: {
        type: Boolean,
        default: false
    },
    answerContent: {
        type: String,
        default: ''
    },
    answerUserID: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    isAccept: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const commentModel = models.Comment || model('Comment', commentSchema);

export default commentModel