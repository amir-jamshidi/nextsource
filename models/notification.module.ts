import { INotification } from '@/types/notification'
import { Schema, model, models } from 'mongoose'

const notificationSchema = new Schema<INotification>({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    isSeen: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const notificationModel = models.Notification || model('Notification', notificationSchema);

export default notificationModel