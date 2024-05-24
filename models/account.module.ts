import { IAccount } from '@/types/Account';
import { Schema, model, models } from 'mongoose';

const accountSchema = new Schema<IAccount>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    cardBank: {
        type: String,
        required: true
    },
    cardShaba: {
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

const accountModel = models.Account || model('Account', accountSchema);

export default accountModel