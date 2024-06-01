import OrderItem from '@/components/shared/OrderItem';
import { IOrder } from '@/types/order';

import React from 'react'
import NoItemUserPanel from './../../../shared/NoItemUserPanel';

const OrdersDetailsSection = async ({ orders }: { orders: IOrder[] }) => {

    return (
        <>
            {orders.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {orders.map(order => (
                        <OrderItem key={order._id} order={order} />
                    ))}
                </div>
            ) : (<NoItemUserPanel margin={false} title="تا الان سفارشی ثبت نکردی" />)}

        </>
    )
}

export default OrdersDetailsSection