'use client'
import { newWithdraw } from '@/actions/withdraw.action'
import Modal from '@/components/shared/Modal'
import { IAccount } from '@/types/Account'
import { AttachMoneyRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import AddAccountSection from './AddAccountSection'
import NoTransAction from './NoTransAction'
interface WithdrawWalletSectionProps {
    accounts: IAccount[],
    money: number
}

const WithdrawWalletSection = ({ accounts, money }: WithdrawWalletSectionProps) => {

    const [isLoading, setIsLoading] = useState(false);
    const [price, setPrice] = useState(0);
    const [accountID, setAccountID] = useState('-1');

    const router = useRouter();

    const handleWidthdraw = async () => {
        if (accountID === '-1') return toast.error('لطفا کارت بانکی را انتخاب کنید')
        if (price < 100_000) return toast.error('حداقل مبلغ برداشتی صدهزار تومان باید باشد')
        if (price > money) return toast.error('مبلغ ورودی از موجودی شما بیشتره')

        try {
            setIsLoading(true)
            const res = await newWithdraw(price, accountID);
            if (!res.state) return toast.error(res.message);
            if (res.state) toast.success(res.message);
            setPrice(0);
            setAccountID('-1')
            router.refresh()
        } catch (error) {
            toast.error('خطای ناشناخته ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>

            <div className='mt-4'>
                <div className='bg-gray-900 rounded-xl px-2 gap-x-1 flex items-center border border-gray-800'>
                    <span>
                        <AttachMoneyRounded className="text-gray-400" />
                    </span>
                    <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className='bg-gray-900 w-full border-none outline-none text-sm text-gray-300 font-dana-bold h-12' />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='border-l border-l-gray-800 pl-2 ml-2 text-sm text-green-500 flex items-center justify-center mt-3 gap-x-0.5'>
                        <p>مبلغ قابل برداشت</p>
                        <p className='font-dana-bold'>{money.toLocaleString()}</p>
                        <p>تومـان</p>
                    </div>
                    <div className='text-sm text-gray-400 flex items-center justify-center mt-3 gap-x-0.5'>
                        <p>مبلغ</p>
                        <p className='font-dana-bold'>{price.toLocaleString()}</p>
                        <p>تومـان</p>
                    </div>
                </div>
                {accounts.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-1'>
                    {accounts.map(account => (
                        <div key={account._id} onClick={() => setAccountID(account._id)} className={`${accountID === account._id ? 'bg-green-500 text-gray-200' : 'bg-blue text-gray-300'} transition-colors cursor-pointer p-3 rounded-xl text-sm shadow-md flex flex-col items-center gap-y-1.5`}>
                            <p className=''>{account.cardBank}</p>
                            <p className='font-dana-bold '>{account.cardNumber.replace(/\D+/g, '').match(/.{1,4}/g)?.join(' - ')}</p>
                            <p className=' font-dana-bold'>{account.cardShaba}</p>
                            <p className=''>{account.cardName}</p>
                        </div>
                    ))}
                </div>
                ) : (
                    <NoTransAction extranClass='mt-4' text="شماره کارتی ثبت نشده" />
                )}

                <div className='mt-4 flex items-center gap-x-1'>
                    <button disabled={isLoading} onClick={handleWidthdraw} className='h-10 rounded-xl text-gray-200 bg-red-500 text-sm px-3'>{isLoading ? 'لطفا صبر کن' : 'برداشت از کیف'}</button>
                    <AddAccountSection />
                </div>
            </div>
        </>

    )
}

export default WithdrawWalletSection