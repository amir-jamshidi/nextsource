
import { ISubMenu } from '@/types/subMenu';
import { models, model, Schema } from 'mongoose'

const subMenuSchema = new Schema<ISubMenu>({
    menuID: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
}, { timestamps: true })

const subMenuModel = models.Seller || model('Seller', subMenuSchema);

export default subMenuModel