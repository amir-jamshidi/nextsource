import { getMyOrders } from '@/actions/order.action';
import isLogin from '@/middlewares/isLogin'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

const OrdersDetailsSection = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const orders = await getMyOrders(isLoginUser._id);

    return (
        <div className='grid grid-cols-5 gap-2'>
            {orders.map(order => (
                <div className='bg-gray-800/40 py-2 px-2 rounded-xl'>
                    <div className='w-full h-36 relative'>
                        <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} className="rounded-xl" fill={true} style={{ objectFit: 'cover' }} alt="" />
                    </div>
                    <div className='flex-center mt-2'>
                        <p className='text-sm text-gray-300'>{order.productID.title}</p>
                    </div>
                    <div className='flex justify-between mt-2 px-1.5'>
                        <div>
                            <p className='text-sm text-gray-400'>{order.createdAt?.toLocaleDateString('fa-IR')}</p>
                        </div>
                        <div className="flex items-center gap-x-0.5">
                            <p className='font-dana-bold text-sm text-green-500'>{order.price.toLocaleString()}</p>
                            <p className="text-sm text-green-500">تومان</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button className='w-full bg-gray-900 rounded-xl text-amber-500 py-1'>جزئیات</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrdersDetailsSection