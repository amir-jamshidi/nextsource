import { ITicket } from '@/types/ticket'
import Link from 'next/link'
import React from 'react'

interface TicketItemProps {
    ticket: ITicket
}

const TicketItem = ({ ticket }: TicketItemProps) => {
    return (
        <div className='h-40 bg-blue-light rounded-2xl p-4 flex flex-col justify-between'>
            <p className='text-justify text-gray-200 text-sm line-clamp-3'>{ticket.body}</p>
            <div className='border-t border-t-gray-800 pt-2.5 flex items-center justify-between'>
                <div className="flex items-center gap-x-1 text-gray-300 text-sm">
                    <p>ایجاد شده در</p>
                    <p className='font-dana'>{ticket.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className='flex items-center gap-x-2 text-sm'>
                    <span className={`${ticket.isAnswer ? 'text-green-500' : 'text-amber-500'} `}>{ticket.isAnswer ? 'پاسخ داده شد' : 'بدون پاسخ'}</span>
                    <Link href={`/p-user/ticket/${ticket._id}`} className='px-2 py-1.5 rounded-xl text-gray-300 '>مشاهده</Link>
                </div>
            </div>
        </div>
    )
}

export default TicketItem