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
        required: false
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
    },
    code: {
        type: String,
        default: () => `TK${Math.floor(Math.random() * 9999)}${Date.now()}`
    }

}, { timestamps: true });

const ticketModel = models.Ticket || model('Ticket', ticketSchema);

export default ticketModel