import { ITicket } from '@/types/ticket';
import { Schema, model, models } from 'mongoose'

const ticketSchema = new Schema<ITicket>({

    sectionID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Section'
    },
    body: {
        type: String,
        required: true
    },
    orderID: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    file: {
        type: [String],
        required: false
    },
    isAnswer: {
        type: Boolean,
        default: false
    },
    answerContent: {
        type: String,
        default: ''
    }

}, { timestamps: true });

const ticketModel = models.Ticket || model('Ticket', ticketSchema);

export default ticketModel