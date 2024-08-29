import { IRequest } from '@/types/request'
import Link from 'next/link'
import React from 'react'

interface RequestItemProps {
    request: IRequest
}

const RequestItem = ({ request }: RequestItemProps) => {
    return (
        <div className=' bg-blue-light rounded-2xl p-3'>
            <div className='flex flex-col gap-y-1.5 items-center h-[72px]'>
                <p className='text-sm line-clamp-1 text-700-300'>{request.title}</p>
                <p className="text-sm  line-clamp-2 text-700-300 w-full">{request.caption}</p>
            </div>
            <div className='mt-2 pt-2 border-t border-t-gray-200 dark:border-t-gray-700/30 flex justify-between items-center'>
                <div className="flex md:text-sm text-xs gap-x-0.5 text-600-400">
                    <p>ثبت شده در</p>
                    <p className='font-dana-bold'>{request.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className="flex gap-1 items-center">
                    {request.isAnswer ? <p className='text-sm text-green-500'>پاسخ داده شد</p> : <p className='text-sm text-amber-500'>بدون پاسخ</p>}
                    <Link href={`/p-user/request/${request._id}`} className='dark:text-gray-300 text-green-500 text-sm'>مشاهده</Link>
                </div>
            </div>
        </div>
    )
}

export default RequestItem