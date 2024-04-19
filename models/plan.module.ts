import { IPlan } from '@/types/plan';
import { model, models, Schema } from 'mongoose'

const planSchema = new Schema<IPlan>({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    planTime: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isOff: {
        type: Boolean,
        required: true
    },
    percentOff: {
        type: Number,
        required: true
    }
});

const planModel = models.Plan || model('Plan', planSchema);

export default planModel