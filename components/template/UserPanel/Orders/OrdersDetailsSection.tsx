import { getMyOrders } from '@/actions/order.action';
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation';
import React from 'react'

const OrdersDetailsSection = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const orders = await getMyOrders(isLoginUser._id);
    console.log(orders);
    return (
        <div>
            {orders.map(order => (
                <div>1</div>
            ))}
        </div>
    )
}

export default OrdersDetailsSection