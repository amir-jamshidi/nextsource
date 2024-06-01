import { IWithdraw } from '@/types/withdraw'
import React from 'react'

interface WithdrawItemProps {
    withdraw: { createdAt: Date, price: number, title: string }
}

const WithdrawItem = ({ withdraw }: WithdrawItemProps) => {
    return (
        <div className='flex justify-between bg-gray-900 p-2 rounded-xl'>
            <div className="text-sm flex items-center">
                <p className='text-gray-300 border-l border-gray-800 pl-2 ml-2'>{withdraw.title}</p>
                <p className='text-green-500 mt-1'>{withdraw.createdAt.toLocaleDateString('fa-IR')}</p>
            </div>
            <div className='flex text-sm items-center gap-x-0.5'>
                <p className='font-dana-bold text-red-500'>{Number(withdraw.price).toLocaleString()}</p>
                <span className='text-red-500'>-</span>
                <p className='text-red-500'>تومان</p>
            </div>
        </div>
    )
}

export default WithdrawItem