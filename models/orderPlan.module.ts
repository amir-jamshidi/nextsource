import { IOrderPlan } from '@/types/orderPlan';
import { Schema, model, models } from 'mongoose';

const orderPlanSchema = new Schema<IOrderPlan>({
    planID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    expireTime: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        default: () => `ORP${Math.floor(Math.random() * 99999)}${Date.now()}`
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const orderPlanModel = models.OrderPlan || model('OrderPlan', orderPlanSchema);

export default orderPlanModel;