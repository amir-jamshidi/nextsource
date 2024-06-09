'use client'

import { newDeposit } from '@/actions/deposit.action';
import { AttachMoneyRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const DepositWalletSection = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [price, setPrice] = useState(0);

    const router = useRouter();

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        //Manual Return
        return toast.error('در حال پیاده سازی درگاه هستیم')
        if (price < 100000) return toast.error('حداقل مبلغ باید صدهزار تومان باشد')
        try {
            setIsLoading(true);
            const res = await newDeposit(price);
            if (!res.state) return toast.error(res.message);
            toast.success(res.message);
            setPrice(0);
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته ای رخ داد')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='mt-4'>
            <form action="" onSubmit={handleSubmitForm}>
                <div className='flex items-center gap-x-2'>
                    <div className='bg-gray-900 flex-1 text-sm rounded-xl flex items-center px-2 border border-gray-800 gap-x-1'>
                        <span className="rounded">
                            <AttachMoneyRounded className="text-gray-400" />
                        </span>
                        <input value={Number(price)} onChange={(e) => setPrice(Number(e.target.value))} type="number" placeholder='مبلغ واریزی شما' className={`h-12 font-dana-bold bg-gray-900 text-gray-300 border-none outline-none px-0.5 w-full`} />

                    </div>
                    <button disabled={isLoading} className="bg-green-500 h-10 px-4 text-sm rounded-xl text-gray-200">{isLoading ? 'لطفا صبر کن' : 'شارژ کیف پول'}</button>
                </div>
            </form>
            <div className='flex justify-center items-center gap-x-0.5 text-sm text-gray-400 px-3 mt-3'>
                <p>مبلغ</p>
                <p className='font-dana-bold'>{price.toLocaleString()}</p>
                <p>تومــان</p>
            </div>
        </div>
    )
}

export default DepositWalletSection