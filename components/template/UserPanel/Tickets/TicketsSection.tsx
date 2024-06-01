import TicketItem from '@/components/shared/TicketItem';
import { ITicket } from '@/types/ticket';
import Link from 'next/link';
import React from 'react'
import NoItemUserPanel from './../../../shared/NoItemUserPanel';

interface TicketsSectionProps {
    tickets: ITicket[];
}

const TicketsSection = async ({ tickets }: TicketsSectionProps) => {

    return (
        <>
            {tickets.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {tickets.map(ticket => (
                        <TicketItem key={ticket._id} ticket={ticket} />
                    ))}
                </div>
            ) : (<NoItemUserPanel href='/p-user/ticket/insert' buttonTitle="ارسال تیکت" margin={false} title='تا الان تیکتی نفرستادی' />)}

        </>
    )
}

export default TicketsSection