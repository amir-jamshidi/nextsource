import { getWalletBuys } from '@/actions/user.action';
import isLogin from '@/middlewares/isLogin'
import { RemoveRounded } from '@mui/icons-material';
import { notFound } from 'next/navigation';
import React from 'react'

const WalletSection = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const buys = await getWalletBuys();
    if (!buys) return notFound();
    console.log(buys);

    return (
        <div className="flex flex-col items-center">
            <div className='h-12 rounded-2xl bg-blue-light flex items-center px-4'>
                <div className='flex items-center text-sm gap-x-1 border-l border-gray-800 pl-2'>
                    <p className='text-gray-300'>موجودی کیف پول : </p>
                    <p className='font-dana-bold text-green-500 pt-0.5'>{isLoginUser.money.toLocaleString()}</p>
                    <p className='text-gray-300'>تومــان</p>
                </div>
                <div className='flex items-center text-sm gap-x-1 border-gray-800 mr-2'>
                    <p className='text-gray-300'>موجودی قابل برداشت : </p>
                    <p className='font-dana-bold text-green-500 pt-0.5'>{isLoginUser.money.toLocaleString()}</p>
                    <p className='text-gray-300'>تومــان</p>
                </div>
            </div>

            <div className='bg-gray-700 p-4 mt-4 rounded-2xl w-4/5'>
                {buys.map(buy => (
                    <div className='flex justify-between'>
                        <p></p>
                        <div className='flex text-sm items-center gap-x-0.5'>
                           
                            <p className='font-dana-bold text-red-500'>{Number(buy.totalPrice).toLocaleString()}</p>
                            <span>-</span>
                            <p>تومان</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WalletSection