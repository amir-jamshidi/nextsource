import { IWithdraw } from '@/types/withdraw';
import { Schema, model, models } from 'mongoose';

const withdrawSchema = new Schema<IWithdraw>({
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
}, { timestamps: true });

const withdrawModel = models.Withdraw || model('Withdraw', withdrawSchema);

export default withdrawModel;