'use client'
import { IAccount } from '@/types/Account'
import { AttachMoneyRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface WithdrawWalletSectionProps {
    accounts: IAccount[],
    money: number
}

const WithdrawWalletSection = ({ accounts, money }: WithdrawWalletSectionProps) => {

    const [price, setPrice] = useState(0);
    const [accountID, setAccountID] = useState('-1');

    const handleWidthdraw = async () => {
        if (accountID === '-1') return toast.error('لطفا کارت بانکی را انتخاب کنید')
        if (price < 100_100) return toast.error('حداقل مبلغ برداشتی صدهزار تومان باید باشد')
        if (price > money) return toast.error('مبلغ ورودی از موجودی شما بیشتره')

    }


    return (
        <div className='mt-4'>
            <div className='bg-gray-900 rounded-xl px-2 gap-x-1 flex items-center'>
                <span>
                    <AttachMoneyRounded className="text-gray-400" />
                </span>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className='h-10 bg-gray-900 w-full border-none outline-none text-sm text-gray-300 font-dana-bold' />
            </div>
            <div className='text-sm text-gray-400 flex items-center justify-center mt-3 gap-x-0.5'>
                <p>مبلغ</p>
                <p className='font-dana-bold'>{price.toLocaleString()}</p>
                <p>تومـان</p>
            </div>
            <div className='grid grid-cols-2 mt-4'>
                {accounts.map(account => (
                    <div onClick={() => setAccountID(account._id)} className={`${accountID === account._id ? 'bg-green-500 text-gray-200' : 'bg-blue text-gray-300'} transition-colors cursor-pointer p-3 rounded-xl text-sm shadow-md flex flex-col items-center gap-y-1.5`}>
                        <p className=''>{account.cardBank}</p>
                        <p className='font-dana-bold '>{account.cardNumber.replace(/\D+/g, '').match(/.{1,4}/g)?.join(' - ')}</p>
                        <p className=' font-dana-bold'>{account.cardShaba}</p>
                        <p className=''>{account.cardName}</p>
                    </div>
                ))}
            </div>
            <div className='mt-4 flex items-center gap-x-1'>
                <button onClick={handleWidthdraw} className='h-10 rounded-xl text-gray-200 bg-red-500 text-sm px-3'>برداشت از کیف</button>
                <button className='h-10 rounded-xl text-gray-200 bg-blue text-sm px-3'>اضافه کردن کارت بانکی</button>
            </div>
        </div>
    )
}

export default WithdrawWalletSection