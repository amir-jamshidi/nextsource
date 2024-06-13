import { getTicketByID } from '@/actions/ticket.action'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketDetailsSection from '@/components/template/UserPanel/Ticket/TicketDetailsSection'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

interface TicketProps {
  params: { ticketID: string }
}
export const metadata: Metadata = {
  title: 'نکست سورس | جزئیات تیکت'
}
const page = async ({ params: { ticketID } }: TicketProps) => {

  const ticket = await getTicketByID(ticketID);
  if (!ticket) return notFound();

  return (
    <UserPanelPageContainer title='جزئیـــات تیکت'>
      <TicketDetailsSection ticket={ticket} />
    </UserPanelPageContainer>
  )
}

export default page