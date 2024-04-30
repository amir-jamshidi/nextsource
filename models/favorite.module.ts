import { IFavorite } from '@/types/favorite'
import { Schema, model, models } from 'mongoose'

const favoriteSchema = new Schema<IFavorite>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
}, { timestamps: true });

const favoriteModel = models.Favorite || model('Favorite', favoriteSchema);

export default favoriteModel