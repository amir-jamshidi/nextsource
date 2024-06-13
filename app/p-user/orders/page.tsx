import { getMyOrders } from '@/actions/order.action'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import OrdersDetailsSection from '@/components/template/UserPanel/Orders/OrdersDetailsSection'
import { userPanelFilter } from '@/constants/userPanelFilter'
import isLogin from '@/middlewares/isLogin'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'


export const metadata: Metadata = {
  title: 'نکست سورس | سفارش ها'
}

const page = async ({ searchParams: { filter = '' } }) => {

  const isLoginUser = await isLogin();
  if (!isLoginUser) return notFound();
  const orders = await getMyOrders(filter);
  if (!orders) return notFound();

  return (
    <UserPanelPageContainer title='سفـــارش ها' >
      <UserPanelFilterSection title='سفارش' filters={userPanelFilter} productsCount={orders.length > 0 ? orders.length : undefined} />
      <OrdersDetailsSection orders={orders} />
    </UserPanelPageContainer>
  )
}

export default page