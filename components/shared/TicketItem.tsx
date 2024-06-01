import { ITicket } from '@/types/ticket'
import Link from 'next/link'
import React from 'react'

interface TicketItemProps {
    ticket: ITicket
}

const TicketItem = ({ ticket }: TicketItemProps) => {
    return (
        <div className=' bg-blue-light rounded-2xl p-3'>
            <div className='flex flex-col gap-y-1.5 items-center h-[46px]'>
                <p className="text-sm  line-clamp-2 text-gray-300 text-justify">{ticket.body}</p>
            </div>
            <div className='mt-2 pt-2 border-t border-t-gray-800 flex justify-between items-center'>
                <div className="flex text-sm gap-x-0.5 text-gray-300">
                    <p>ثبت شده در</p>
                    <p>{ticket.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className="flex gap-1 items-center">
                    {ticket.isAnswer ? <p className='text-sm text-green-500'>پاسخ داده شد</p> : <p className='text-sm text-amber-500'>بدون پاسخ</p>}
                    <Link href={`/p-user/ticket/${ticket._id}`} className='text-gray-300 text-sm'>مشاهده</Link>
                </div>
            </div>
        </div>
    )
}


export default TicketItem