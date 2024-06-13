import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import InsertTicketSection from '@/components/template/UserPanel/Ticket/InsertTicketSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'نکست سورس | تیکت جدید'
}
const page = () => {
  return (
    <UserPanelPageContainer title='ارســـال تیکت'>
      <InsertTicketSection />
    </UserPanelPageContainer>
  )
}

export default page