'use client'

import { getMyOrders } from "@/actions/order.action";
import { getSections } from "@/actions/section.action"
import { addNewTicket } from "@/actions/ticket.action";
import { TicketSchema } from "@/libs/Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query"

const InsertTicketSection = () => {

    const { data = [] } = useQuery(['sections'], () => getSections());
    const { data: orders = [] } = useQuery(['orders'], () => getMyOrders(''));

    const { handleSubmit, register } = useForm({
        resolver: yupResolver(TicketSchema)
    })

    const handleSubmitTicket = async ({ body, sectionID, orderID }: { body: string, sectionID: string, orderID: string }) => {
        try {
            const res = await addNewTicket(body, sectionID, orderID)
            if (!res.state) return toast.error(res.message);
            toast.success(res.message);
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitTicket)}>
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="bg-gray-800 rounded-xl px-3">
                        <select {...register('sectionID')} className='w-full outline-none border-none py-3.5 text-gray-200 bg-gray-800 text-sm rounded-xl'>
                            <option value={'-1'}>بخش ارسالی</option>
                            {data.map(section => (
                                <option value={String(section._id)}>{section.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-gray-800 rounded-xl px-3">
                        <select {...register('orderID')} className='w-full outline-none border-none py-3.5 text-gray-200 bg-gray-800 text-sm rounded-xl'>
                            <option value={'-1'}>پیگیری خرید</option>
                            <>
                                {orders && (
                                    <>
                                        {orders.map(order => (
                                            <option value={order._id}>{order.productID?.title || ''}</option>
                                        ))}
                                    </>
                                )}
                            </>
                        </select>
                    </div>
                </div>
                <div className="mt-2">
                    <textarea {...register('body')} placeholder="متن تیکت شما ..." className="min-h-44 max-h-52 w-full bg-gray-800 rounded-xl text-sm outline-none border-none text-gray-200 p-3"></textarea>
                </div>
                <button className="bg-blue w-full rounded-xl py-2.5 text-gray-200">ارسال تیکت</button>
            </form>
        </div>
    )
}

export default InsertTicketSection