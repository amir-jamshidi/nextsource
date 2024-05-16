import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import ticketModel from "@/models/ticket.module";
import { ITicket } from "@/types/ticket";

export const getMyTickets = async (filter: string) => {
    try {
        await connectToDB();

        const sort: any = {};
        if (!filter) sort['_id'] = -1
        if (filter === 'newest') sort['_id'] = -1
        if (filter === 'oldest') sort['_id'] = 1

        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const tickets = await ticketModel.find({ userID: isLoginUser._id }).sort(sort).lean() as ITicket[];
        return tickets
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const getTicketByID = async (ticketID: string) => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false;
        const ticket = await ticketModel.findOne({ _id: ticketID, userID: isLoginUser._id }).lean();
        return ticket
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}