import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import InsertTicketSection from '@/components/template/UserPanel/Ticket/InsertTicketSection'
import React from 'react'

const page = () => {
  return (
    <UserPanelPageContainer title='ارســـال تیکت'>
      <InsertTicketSection />
    </UserPanelPageContainer>
  )
}

export default page