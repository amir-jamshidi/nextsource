import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import OrderDetails from '@/components/template/UserPanel/Order/OrderDetails'
import React from 'react'


interface OrderProps {
  params: { orderID: string }
}

const page = ({ params: { orderID } }: OrderProps) => {


  return (
    <UserPanelPageContainer title='جزئیـــات سفارش'>
      <OrderDetails orderID={orderID} />
    </UserPanelPageContainer>
  )
}

export default page