import { IOrder } from '@/types/order';
import { Schema, model, models } from 'mongoose'

const orderSchema = new Schema<IOrder>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    isOff: {
        type: Boolean,
        default: false
    },
    percentOff: {
        type: Number,
        default: 0
    },
    action: {
        type: String,
        enum: ['ONLINE', 'WALLET'],
        required: true
    },
    cashBack: {
        type: Number,
        default: 0
    },
    code: {
        type: String,
        default: () => `OR${Math.floor(Math.random() * 99999)}${Date.now()}`
    }
}, { timestamps: true });


const orderModel = models.Order || model('Order', orderSchema);

export default orderModel
