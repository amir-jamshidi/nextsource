import { getMyTickets } from '@/actions/ticket.action'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketsSection from '@/components/template/UserPanel/Tickets/TicketsSection'
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter'
import { AddRounded } from '@mui/icons-material'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ searchParams: { filter = '' } }) => {

  const tickets = await getMyTickets(filter);
  if (!tickets) return notFound();

  return (
    <UserPanelPageContainer title='تیکـــت ها'>
      <UserPanelFilterSection title="تیکت" productsCount={tickets.length} filters={userPanelTicketFilter}>
        <div className='flex justify-end items-center h-full pl-2'>
          <Link href={`/p-user/ticket/insert`}>
            <span className='w-10 h-10 rounded-full flex-center'>
              <AddRounded className="text-gray-300" />
            </span>
          </Link>
        </div>
      </UserPanelFilterSection>
      <TicketsSection tickets={tickets} />
    </UserPanelPageContainer>
  )
}

export default page