import { IRequest } from '@/types/request'
import Link from 'next/link'
import React from 'react'


interface RequestSectionProps {
    requests: IRequest[]
}

const RequestSection = ({ requests }: RequestSectionProps) => {
    return (
        <div className='grid grid-cols-4 gap-1'>
            {requests.map(request => (
                <div key={request._id} className=' bg-blue-light rounded-2xl p-3'>
                    <div className='flex flex-col gap-y-1.5 items-center h-[88px]'>
                        <p className='text-sm line-clamp-1 text-gray-200'>{request.title}</p>
                        <p className="line-clamp-3 text-sm text-gray-300 text-justify">{request.caption}</p>
                    </div>
                    <div className='mt-2 pt-2 border-t border-t-gray-800 flex justify-between items-center'>
                        <div className="flex text-sm gap-x-0.5 text-gray-300">
                            <p>ثبت شده در</p>
                            <p>{request.createdAt?.toLocaleDateString('fa-IR')}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {request.isAnswer ? <p className='text-sm text-green-500'>پاسخ داده شد</p> : <p className='text-sm text-amber-500'>بدون پاسخ</p>}
                            <Link href={`/p-user/request/${request._id}`} className='text-gray-300 text-sm'>مشاهده</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RequestSection