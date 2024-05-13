import connectToDB from "@/database/db"
import ticketModel from "@/models/ticket.module";

export const getMyTickets = async (userID: string) => {
    try {
        await connectToDB();
        const tickets = await ticketModel.find({ userID }).lean();
        return tickets
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}