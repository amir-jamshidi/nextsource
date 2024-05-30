import BackButton from '@/components/buttons/BackButton/BackButton'
import { IOrder } from '@/types/order'
import { ISection } from '@/types/section'
import { ITicket } from '@/types/ticket'
import React from 'react'

const TicketDetailsSection = ({ ticket }: { ticket: ITicket }) => {

    const order = ticket.orderID as IOrder || null
    const section = ticket.sectionID as ISection;
    return (
        <div>
            <div className='h-12 bg-blue-light rounded-2xl flex items-center px-4 relative'>
                <div className='flex text-gray-300 gap-x-1 text-sm items-center'>
                    <p>تاریخ ایجاد : </p>
                    <p className='font-dana-bold -mb-0.5'>{ticket.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className='flex text-gray-300 gap-x-1 text-sm px-2 border-x border-x-gray-700 mx-2'>
                    <p>وضعیت تیکت : </p>
                    <p className={`${ticket.isAnswer ? 'text-green-500' : 'text-amber-500'}`}>{ticket.isAnswer ? 'پاسخ داده شد' : 'بدون پاسخ'}</p>
                </div>
                <div className='flex text-gray-300 gap-x-1 text-sm items-center'>
                    <p>شناسه تیکت : </p>
                    <p className='font-dana-bold -mb-0.5'>{ticket.code}</p>
                </div>
                {order && (
                    <div className='flex text-gray-300 gap-x-1 text-sm border-r border-r-gray-700 pr-2 mr-2 '>
                        <p>پیگیری سفارش : </p>
                        <p className='text-green-500 font-dana-bold pt-0.5'>{order.code}</p>
                    </div>
                )}
                <BackButton bg={false} />
            </div>
            <div className='mt-4 bg-blue-light p-4 rounded-2xl'>
                <div className='flex gap-x-2'>
                    <span className='flex-center shrink-0 w-12 h-12 rounded-full bg-gray-800/60 text-sm text-gray-400 border border-gray-700'>شما</span>
                    <div className='flex-1 bg-gray-800/60 rounded-2xl px-4 py-3'>
                        <p className='text-gray-300 text-sm text-justify'>
                            {ticket.body}
                        </p>
                    </div>
                </div>
                {ticket.answerContent ? (
                    <>
                        <div className='flex items-center gap-x-3  my-5'>
                            <span className='h-px bg-gray-800 flex flex-1'></span>
                            <p className="text-sm text-gray-400">پاسخ {section.title}</p>
                            <span className='h-px bg-gray-800 flex flex-1'></span>

                        </div>
                        <div className='flex flex-row-reverse gap-x-2'>
                            <span className='flex-center shrink-0 w-12 h-12 rounded-full bg-gray-800/60 text-sm text-gray-400 border border-green-700'>پاسخ</span>
                            <div className='flex-1 bg-gray-800/60 rounded-2xl px-4 py-3'>
                                <p className='text-gray-300 text-sm text-justify'>
                                    {ticket.answerContent}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='flex-center mt-8 mb-4'>
                        <p className='text-amber-500 text-sm'>در انتظار پاسخ ...</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default TicketDetailsSection