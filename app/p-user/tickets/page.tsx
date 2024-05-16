import { getMyTickets } from '@/actions/ticket.action'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketsSection from '@/components/template/UserPanel/Tickets/TicketsSection'
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ searchParams: { filter = '' } }) => {

  const tickets = await getMyTickets(filter);
  if (!tickets) return notFound();

  return (
    <UserPanelPageContainer title='تیکـــت ها'>
      <UserPanelFilterSection title="تیکت" productsCount={tickets.length} filters={userPanelTicketFilter} />
      <TicketsSection tickets={tickets} />
    </UserPanelPageContainer>
  )
}

export default page