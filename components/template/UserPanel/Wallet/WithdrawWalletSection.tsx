'use client'
import { IAccount } from '@/types/Account'
import { AttachMoneyRounded } from '@mui/icons-material'
import React, { useState } from 'react'

interface WithdrawWalletSectionProps {
    accounts: IAccount[]
}

const WithdrawWalletSection = ({ accounts }: WithdrawWalletSectionProps) => {

    const [price, setPrice] = useState(0);



    return (
        <div className='mt-4'>
            <div className='bg-gray-900 rounded-xl px-2 gap-x-1 flex items-center'>
                <span>
                    <AttachMoneyRounded className="text-gray-400" />
                </span>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className='h-10 bg-gray-900 w-full border-none outline-none text-sm text-gray-300 font-dana-bold' />
            </div>
            <div className='grid grid-cols-2 mt-4'>
                {accounts.map(account => (
                    <div className='bg-blue p-3 rounded-xl text-sm'>
                        <p className=''>{account.cardName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WithdrawWalletSection