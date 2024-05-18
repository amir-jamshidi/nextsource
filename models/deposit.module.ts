import { IDeposit } from '@/types/deposit';
import { Schema, model, models } from 'mongoose';

const depositSchema = new Schema<IDeposit>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isSuccess: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

const depositModel = models.Deposit || model('Deposit', depositSchema);

export default depositModel