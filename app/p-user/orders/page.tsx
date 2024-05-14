import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import UserPanelTitle from '@/components/shared/UserPanelTitle'
import OrdersDetailsSection from '@/components/template/UserPanel/Orders/OrdersDetailsSection'
import React from 'react'

const page = () => {
  return (

    <UserPanelPageContainer title='سفـــارش ها' >
      <UserPanelFilterSection />
      <OrdersDetailsSection />
    </UserPanelPageContainer>
  )
}

export default page