import { IComment } from '@/types/comment';
import { model, models, Schema } from 'mongoose'

const commentSchema = new Schema<IComment>({
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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
    answerID: {
        type: Schema.Types.ObjectId,
        required: false
    }
}, { timestamps: true });

const commentModel = models.Comment || model('Comment', commentSchema);

export default commentModel