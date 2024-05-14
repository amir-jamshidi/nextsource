import { getMyOrders } from '@/actions/order.action';
import OrderItem from '@/components/shared/OrderItem';
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation';
import React from 'react'

const OrdersDetailsSection = async () => {

    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const orders = await getMyOrders();
    if (!orders) return notFound();

    return (
        <div className='grid grid-cols-4 gap-2'>
            {orders.map(order => (
                <OrderItem order={order} />
            ))}
        </div>
    )
}

export default OrdersDetailsSection