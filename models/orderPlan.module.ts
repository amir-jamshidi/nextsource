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
    }
}, { timestamps: true });

const orderPlanModel = models.OrderPlan || model('OrderPlan', orderPlanSchema);

export default orderPlanModel;