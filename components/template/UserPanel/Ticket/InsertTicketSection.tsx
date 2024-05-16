'use client'

import { getMyOrders } from "@/actions/order.action";
import { getSections } from "@/actions/section.action"
import { useQuery } from "react-query"

const InsertTicketSection = () => {

    const { data = [] } = useQuery(['sections'], () => getSections());
    const { data: orders = [] } = useQuery(['orders'], () => getMyOrders(''));

    return (
        <div>
            <form>
                <div className="grid grid-cols-2 gap-x-2">
                    <div className="bg-gray-800 rounded-xl px-3">
                        <select className='w-full outline-none border-none py-3.5 text-gray-200 bg-gray-800 text-sm rounded-xl'>
                            <option>بخش ارسالی</option>
                            {data.map(section => (
                                <option>{section.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="bg-gray-800 rounded-xl px-3">
                        <select className='w-full outline-none border-none py-3.5 text-gray-200 bg-gray-800 text-sm rounded-xl'>
                            <option>پیگیری خرید</option>
                            <>
                                {orders && (
                                    <>
                                        {orders.map(order => (
                                            <option>{order.productID.title}</option>
                                        ))}
                                    </>
                                )}
                            </>
                        </select>
                    </div>
                </div>
                <div className="mt-2">
                    <textarea placeholder="متن تیکت شما ..." className="min-h-44 max-h-52 w-full bg-gray-800 rounded-xl text-sm outline-none border-none text-gray-200 p-3"></textarea>
                </div>
                <button className="bg-blue w-full rounded-xl py-2.5 text-gray-200">ارسال تیکت</button>
            </form>
        </div>
    )
}

export default InsertTicketSection