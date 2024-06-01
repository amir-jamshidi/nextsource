import { getWalletDeposit, getWalletWithdraw } from '@/actions/user.action';
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation';
import React from 'react'
import DepositWalletSection from './DepositWalletSection';
import WithdrawWalletSection from './WithdrawWalletSection';
import accountModel from '@/models/account.module';
import { getAccounts } from '@/actions/account.action';
import WithdrawItem from '@/components/shared/WithdrawItem';
import DepositItem from '@/components/shared/DepositItem';

const WalletSection = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const withdraws = await getWalletWithdraw();
    const deposits = await getWalletDeposit();
    if (!withdraws || !deposits) return notFound();

    const accounts = await getAccounts();

    return (
        <div className="flex flex-col items-center">
            <div className='h-12 rounded-2xl bg-blue-light flex items-center px-4 w-full justify-center'>
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
                            {withdraws.length > 0 ? (
                                <>
                                    {withdraws.map(withdraw => (
                                        <WithdrawItem withdraw={withdraw} />
                                    ))}
                                </>
                            ) : (
                                <div className='bg-gray-900 py-4 rounded-2xl flex-center'>
                                    <p className="text-sm text-gray-400">بدون تراکنش</p>
                                </div>
                            )}

                        </div>
                    </div>

                    <div className='bg-blue-light p-4 mt-2 rounded-2xl '>
                        <div className='text-red-500 text-sm flex justify-center'>
                            <p>برداشت از کیف پول</p>
                        </div>
                        <WithdrawWalletSection money={isLoginUser.money} accounts={JSON.parse(JSON.stringify(accounts))} />
                    </div>
                </div>

                <div className=''>
                    <div className='bg-blue-light p-4 mt-4 rounded-2xl '>
                        <div className='text-green-500 text-sm flex justify-center'>
                            <p>واریزی هــا</p>
                        </div>
                        <div className=' flex flex-col gap-y-1 mt-4'>
                            {deposits.length > 0 ? (
                                <>
                                    {deposits.map(deposit => (
                                        <DepositItem deposit={deposit} />
                                    ))}
                                </>
                            ) : (
                                <div className='bg-gray-900 py-4 rounded-2xl flex-center'>
                                    <p className="text-sm text-gray-400">بدون تراکنش</p>
                                </div>
                            )}

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