import { getWalletDeposit, getWalletWithdraw } from '@/actions/user.action';
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation';
import React from 'react'
import DepositWalletSection from './DepositWalletSection';
import WithdrawWalletSection from './WithdrawWalletSection';
import accountModel from '@/models/account.module';
import { getAccounts } from '@/actions/account.action';

const WalletSection = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const withdraws = await getWalletWithdraw();
    const deposits = await getWalletDeposit();
    if (!withdraws || !deposits) return notFound();

    const accounts = await getAccounts();

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


            <div className='grid grid-cols-2 gap-x-2 w-full'>

                <div>
                    <div className='bg-blue-light p-4 mt-4 rounded-2xl '>
                        <div className='text-red-500 text-sm flex justify-center'>
                            <p>برداشتی هــا</p>
                        </div>
                        <div className=' flex flex-col gap-y-1 mt-4'>
                            {withdraws.map(withdraw => (
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
                            ))}
                        </div>
                    </div>

                    <div className='bg-blue-light p-4 mt-2 rounded-2xl '>
                        <div className='text-red-500 text-sm flex justify-center'>
                            <p>برداشت از کیف پول</p>
                        </div>
                        <WithdrawWalletSection accounts={JSON.parse(JSON.stringify(accounts))} />
                    </div>
                </div>

                <div className=''>
                    <div className='bg-blue-light p-4 mt-4 rounded-2xl '>
                        <div className='text-green-500 text-sm flex justify-center'>
                            <p>واریزی هــا</p>
                        </div>
                        <div className=' flex flex-col gap-y-1 mt-4'>
                            {deposits.map(deposit => (
                                <>
                                    {deposit.price > 0 && (
                                        <div className='flex justify-between bg-gray-900 p-2 rounded-xl'>
                                            <div className="text-sm flex items-center">
                                                <p className='text-gray-300 border-l border-gray-800 pl-2 ml-2'>{deposit.title}</p>
                                                <p className='text-green-500 mt-1'>{deposit.createdAt.toLocaleDateString('fa-IR')}</p>
                                            </div>
                                            <div className='flex text-sm items-center gap-x-0.5'>
                                                <p className='font-dana-bold text-green-500'>{Number(deposit.price).toLocaleString()}</p>
                                                <span className='text-green-500'>+</span>
                                                <p className='text-green-500'>تومان</p>
                                            </div>
                                        </div>
                                    )}
                                </>

                            ))}
                        </div>
                    </div>

                    <div className='bg-blue-light p-4 mt-2 rounded-2xl '>
                        <div className='text-green-500 text-sm flex justify-center'>
                            <p>واریز به کیف پول</p>
                        </div>
                        <DepositWalletSection />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default WalletSection