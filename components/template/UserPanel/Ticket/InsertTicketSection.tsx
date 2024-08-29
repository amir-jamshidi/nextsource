'use client'

import { getMyOrders, getMyOrdersFromClient } from "@/actions/order.action";
import { getSections } from "@/actions/section.action"
import { addNewTicket } from "@/actions/ticket.action";
import { TicketSchema } from "@/libs/Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query"
import OrderInputItem from "./OrderInputItem";
import BackButton from "@/components/buttons/BackButton/BackButton";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/section";

const InsertTicketSection = () => {

    const { data: sections = [] } = useQuery(['sections'], () => getSections());
    const { data: orders = [] } = useQuery(['orders'], () => getMyOrdersFromClient());

    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(TicketSchema)
    })


    const handleSubmitTicket = async ({ body, sectionID, orderID }: { body: string, sectionID: string, orderID: string }) => {
        try {
            const res = await addNewTicket(body, sectionID, orderID)
            if (!res.state) return toast.error(res.message);
            toast.success(res.message);
            reset({ sectionID: '-1', body: '', orderID: '-1' })
            router.push('/p-user/tickets');
            router.refresh();
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }


    return (
        <div>
            <div className="h-12 rounded-2xl mb-4 bg-blue-light relative flex items-center px-4">
                <BackButton bg={false} />
                <div className="flex gap-1 flex-wrap">
                    {Object.entries(errors).length > 0 && (
                        <>
                            {Object.entries(errors).map(err => (
                                <p key={err[1].message} className="text-xs md:text-sm  py-0.5 bg-red-500 text-white rounded-lg px-3">{err[1].message}</p>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit(handleSubmitTicket)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div className="bg-input-container rounded-xl px-3">
                        <select {...register('sectionID')} className='w-full outline-none border-none py-3.5 text-gray-200 bg-input text-sm rounded-xl'>
                            <option value={'-1'}>بخش ارسالی</option>
                            {sections.map(section => (
                                <option key={String(section._id)} value={String(section._id)}>{section.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-input-container rounded-xl px-3">
                        <select {...register('orderID')} className='w-full outline-none border-none py-3.5 text-gray-200 bg-input text-sm rounded-xl'>
                            <option value={'-1'}>پیگیری خرید</option>
                            <>
                                {orders && (
                                    <>
                                        {orders.map(order => (
                                            <OrderInputItem key={order._id} order={order} />
                                        ))}
                                    </>
                                )}
                            </>
                        </select>
                    </div>
                </div>
                <div className="mt-1 bg-input-container mb-1  rounded-xl">
                    <textarea {...register('body')} placeholder="متن تیکت شما ..." className="min-h-44 max-h-52 w-full bg-input rounded-xl text-sm outline-none border-none text-gray-200 p-3" />
                </div>
                <input disabled={isSubmitting} type="submit" className={`h-12 w-full bg-btns mt-1 rounded-xl ${isSubmitting ? 'text-gray-500' : 'text-gray-100 dark:text-gray-300'} cursor-pointer transition-colors`} value={isSubmitting ? 'لطفا صبر کن ...' : 'ارسال تیکت'} />
            </form>
        </div>
    )
}

export default InsertTicketSection