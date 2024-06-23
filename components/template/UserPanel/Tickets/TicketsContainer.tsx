import { getMyTickets } from '@/actions/ticket.action';
import AddSectionUserPanel from '@/components/shared/AddSectionUserPanel';
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection';
import { notFound } from 'next/navigation';
import React from 'react'
import TicketsSection from './TicketsSection';
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter';

const TicketsContainer = async ({ filter }: { filter: string }) => {

    const tickets = await getMyTickets(filter);
    if (!tickets) return notFound();
    return (
        <>
            <UserPanelFilterSection title="تیکت" productsCount={tickets.length} filters={userPanelTicketFilter}>
                <AddSectionUserPanel href='/p-user/ticket/insert' title='ارسال تیکـت' />
            </UserPanelFilterSection>
            <TicketsSection tickets={tickets} />
        </>
    )
}

export default TicketsContainer