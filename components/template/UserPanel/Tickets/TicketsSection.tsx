import TicketItem from '@/components/shared/TicketItem';
import { ITicket } from '@/types/ticket';
import Link from 'next/link';
import React from 'react'

interface TicketsSectionProps {
    tickets: ITicket[];
}

const TicketsSection = async ({ tickets }: TicketsSectionProps) => {

    return (
        <div className='grid grid-cols-2 gap-2'>
            {tickets.map(ticket => (
                <TicketItem ticket={ticket} />
            ))}
        </div>
    )
}

export default TicketsSection