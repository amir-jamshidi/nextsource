import { IOrder } from '@/types/order'
import { IProduct } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface OrderItemProps {
    order: IOrder
}

const OrderItem = ({ order }: OrderItemProps) => {

    const product = order.productID as IProduct

    return (
        <div className='bg-gray-800/40 py-2 px-2 rounded-xl'>
            <div className='w-full h-36 relative'>
                <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} className="rounded-xl" fill={true} style={{ objectFit: 'cover' }} alt="" />
            </div>
            <div className='flex-center mt-2'>
                <p className='text-sm text-gray-300'>{product.title}</p>
            </div>
            <div className='flex justify-between mt-2 px-1.5'>
                <div>
                    <p className='text-sm text-gray-400'>{order.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className="flex items-center gap-x-0.5">
                    <p className='font-dana-bold text-sm text-green-500'>{order.totalPrice ? order.totalPrice.toLocaleString() : 'رایگان'}</p>
                    {order.totalPrice > 0 && (
                        <p className="text-sm text-green-500">تومان</p>
                    )}
                </div>
            </div>
            <div className="mt-2">
                <Link href={`/p-user/order/${order._id}`}>
                    <button className='w-full bg-gray-900 rounded-xl text-gray-300 py-1'>جزئیات</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderItem