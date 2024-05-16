import { getTicketByID } from '@/actions/ticket.action'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketDetailsSection from '@/components/template/UserPanel/Ticket/TicketDetailsSection'
import React from 'react'

interface TicketProps {
  params: { ticketID: string }
}

const page = async ({ params: { ticketID } }: TicketProps) => {

  const ticket = await getTicketByID(ticketID);
  console.log(ticket);
  return (
    <UserPanelPageContainer title='جزئیـــات تیکت'>
      <TicketDetailsSection />
    </UserPanelPageContainer>
  )
}

export default page