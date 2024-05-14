import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import OrdersDetailsSection from '@/components/template/UserPanel/Orders/OrdersDetailsSection'
import React from 'react'

const page = ({ searchParams: { filter = '' } }) => {

  return (
    <UserPanelPageContainer title='سفـــارش ها' >
      <UserPanelFilterSection />
      <OrdersDetailsSection filter={filter} />
    </UserPanelPageContainer>
  )
}

export default page