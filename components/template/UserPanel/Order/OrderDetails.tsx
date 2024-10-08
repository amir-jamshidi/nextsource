import { getOrder } from '@/actions/order.action'
import BackButton from '@/components/buttons/BackButton/BackButton';
import { IProduct } from '@/types/product';
import { InsertLinkRounded } from '@mui/icons-material';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

interface OrderDetailsProps {
    orderID: string
}

const OrderDetails = async ({ orderID }: OrderDetailsProps) => {
    const order = await getOrder(orderID);
    if (!order) return notFound();

    const product = order.productID as IProduct;

    return (
        <div>
            <div className=' h-12 bg-blue-light rounded-2xl flex items-center px-4 relative'>
                <div className='flex text-700-300 gap-x-1 text-sm items-center'>
                    <p>تاریخ خرید : </p>
                    <p className='font-dana-bold -mb-0.5'>{order.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className='flex text-700-300 gap-x-1 text-sm px-2 border-r border-x-gray-200 lg:border-x dark:border-x-gray-700 mx-2'>
                    <p>روش پرداخت : </p>
                    <p className='text-green-500'>{order.action === 'ONLINE' ? 'پرداخت آنلاین' : 'کیف پول'}</p>
                </div>
                <div className='lg:flex hidden text-700-300 gap-x-1 text-sm items-center'>
                    <p>شناسه پرداخت : </p>
                    <p className='font-dana-bold -mb-0.5'>{order.code}</p>
                </div>
                <div className='lg:flex hidden text-700-300 gap-x-1 text-sm border-r border-r-gray-200 dark:border-r-gray-700 pr-2 mr-2 '>
                    <p>وضعیت سفارش : </p>
                    <p className='text-green-500'>تکمیل شده</p>
                </div>
                <BackButton bg={false} />
            </div>
            <div className='lg:hidden py-2 gap-y-1 bg-blue-light rounded-2xl flex justify-center px-4 relative mt-2 flex-col'>
                <div className='flex text-sm text-700-300 gap-x-1 items-center'>
                    <p>شناسه پرداخت : </p>
                    <p className='font-dana-bold -mb-0.5'>{order.code}</p>
                </div>
                <div className='flex text-700-300 gap-x-1 text-sm '>
                    <p>وضعیت سفارش : </p>
                    <p className='text-green-500'>تکمیل شده</p>
                </div>
            </div>


            <div className='bg-gray-100 dark:bg-gray-800/40 mt-2 p-3 gap-y-3 md:gap-y-0 rounded-2xl flex items-center flex-col md:flex-row gap-x-3 border border-transparent dark:border-gray-700/30'>
                <div className='w-full md:w-72 h-44 relative'>
                    <Image src={product.photo} className="rounded-xl" fill={true} style={{ objectFit: 'cover' }} alt="" />
                </div>
                <div className='gap-y-1 px-1.5 pb-1 md:pb-0 justify-start w-full md:w-auto flex flex-col text-sm'>
                    <p className='text-800-200'>{product.title}</p>
                    <div className='flex items-center text-700-300 gap-x-1'>
                        <p>مبلغ سورس : </p>
                        <p className='font-dana-bold text-green-500'>{order.price.toLocaleString()}</p>
                        <p className='text-green-500'>تومان</p>
                    </div>

                    <div className='flex items-center text-700-300 gap-x-1'>
                        <p>مبلغ تخفیف : </p>
                        {order.isOff && (
                            <>
                                <p className='font-dana-bold text-red-500'>{(order.price - order.totalPrice).toLocaleString()}</p>
                                <p className='text-red-500'>تومان</p>
                            </>
                        )}
                        {!order.isOff && (
                            <p className='text-red-500'>بدون تخفیف</p>
                        )}
                    </div>
                    <div className='flex items-center text-700-300 gap-x-1'>
                        <p>درصد تخفیف : </p>
                        <p className='font-dana-bold text-red-500'>{order.percentOff}%</p>
                    </div>
                    <div className='flex items-center text-700-300 gap-x-1'>
                        <p>مبلغ کش بَک : </p>
                        <p className='font-dana-bold text-amber-500'>{order.cashBack ? order.cashBack.toLocaleString() : 'بدون کش بَک'}</p>
                        {order.cashBack > 0 && (
                            <p className='text-amber-500'>تومان</p>
                        )}
                    </div>
                    <div className='flex items-center text-700-300 gap-x-1'>
                        <p>مبلغ پرداخت شده : </p>
                        <p className='font-dana-bold text-green-500'>{order.totalPrice ? order.totalPrice.toLocaleString() : 'رایگان'}</p>
                        {order.totalPrice > 0 && (
                            <p className='text-green-500'>تومان</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-2 flex flex-col gap-y-1 '>
                {product.links.map((link, i) => (
                    <div key={link} className="bg-gray-100 dark:bg-gray-800/30 px-3 py-2 rounded-xl flex justify-between items-center hover:bg-gray-800/70 transition-colors border border-transparent dark:border-gray-700/30">
                        <div className="flex gap-x-1 text-700-300">
                            <span className='flex justify-center items-center'>
                                <InsertLinkRounded className="text-600-400" />
                            </span>
                            <p>لینک دانلود</p>
                            <span className="font-dana-bold">{i + 1}</span>
                        </div>
                        <div>
                            <a href={link} target="_blank" className="bg-btns text-sm  inline-block px-3 py-2 rounded-full text-gray-100 dark:text-gray-300">دانلود سورس</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderDetails