import OrderItem from '@/components/shared/OrderItem';
import { IOrder } from '@/types/order';

import React from 'react'

const OrdersDetailsSection = async ({ orders }: { orders: IOrder[] }) => {

    return (
        <div className='grid grid-cols-4 gap-2'>
            {orders.map(order => (
                <OrderItem key={order._id} order={order} />
            ))}
        </div>
    )
}

export default OrdersDetailsSection