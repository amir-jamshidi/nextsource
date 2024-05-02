import { IProduct } from '@/types/product';
import { model, models, Schema } from 'mongoose'


const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categoryID: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    buyCount: {
        type: Number,
        default: 0
    },
    isPlan: {
        type: Boolean,
        required: true
    },
    isOff: {
        type: Boolean,
        required: true
    },
    precentOff: {
        type: Number,
        default: 0
    },
    photo: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    isFree: {
        type: Boolean,
        required: true
    },
    links: {
        type: [String],
        required: true
    },
    preView: {
        type: String,
        deflate: ''
    },
    tags: {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: 'Tag'
    },
    rate: {
        type: Number,
        default: 0
    },
    cashBack: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const productModel = models.Product || model('Product', productSchema);

export default productModel