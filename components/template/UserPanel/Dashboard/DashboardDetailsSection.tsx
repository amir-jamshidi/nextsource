import { getPlans } from '@/actions/plan.action'
import { getDashboard } from '@/actions/user.action'
import OrderItem from '@/components/shared/OrderItem';
import TicketItem from '@/components/shared/TicketItem';
import { IOrder } from '@/types/order';
import { IRequest } from '@/types/request';
import { ITicket } from '@/types/ticket';
import { notFound } from 'next/navigation';
import React from 'react'

const DashboardDetailsSection = async () => {

  const result = await getDashboard();
  if (!result) return notFound();
  const { orders, tickets, requests } = result

  return (
    <div>

      <div>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-700 flex-1'></span>
          <p className='text-gray-400'>سفارش های اخیر</p>
          <span className='flex h-px bg-gray-700 flex-1'></span>
        </div>
        <div className="grid grid-cols-4 gap-x-2 mt-6">
          {orders.map(order => (
            <OrderItem order={order} />
          ))}
        </div>
      </div>

      <div className='mt-6'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-700 flex-1'></span>
          <p className='text-gray-400'>تیکت های اخیر</p>
          <span className='flex h-px bg-gray-700 flex-1'></span>
        </div>
        <div className="grid grid-cols-2 gap-2 gap-x-2 mt-6">
          {tickets.map(ticket => (
            <TicketItem ticket={ticket} />
          ))}
        </div>
      </div>

      <div className='mt-6'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-700 flex-1'></span>
          <p className='text-gray-400'>درخواست های اخیر</p>
          <span className='flex h-px bg-gray-700 flex-1'></span>
        </div>
        <div className="grid grid-cols-2 gap-2 gap-x-2 mt-6">
          {tickets.map(ticket => (
            <TicketItem ticket={ticket} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default DashboardDetailsSection