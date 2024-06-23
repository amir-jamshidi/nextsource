import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import React from 'react'
import OrdersDetailsSection from './OrdersDetailsSection'
import isLogin from '@/middlewares/isLogin';
import { notFound } from 'next/navigation';
import { getMyOrders } from '@/actions/order.action';
import { userPanelFilter } from '@/constants/userPanelFilter';

const OrdersContainer = async ({ filter }: { filter: string }) => {

    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const orders = await getMyOrders(filter);
    if (!orders) return notFound();

    return (
        <>
            <UserPanelFilterSection title='سفارش' filters={userPanelFilter} productsCount={orders.length > 0 ? orders.length : undefined} />
            <OrdersDetailsSection orders={orders} />
        </>
    )
}

export default OrdersContainer