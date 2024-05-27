import { getTotoalOrders } from '@/actions/order.action';
import { getPlanDetails } from '@/actions/orderPlan.action';
import { getPlans } from '@/actions/plan.action'
import { getDashboard } from '@/actions/user.action'
import OrderItem from '@/components/shared/OrderItem';
import RequestItem from '@/components/shared/RequestItem';
import TicketItem from '@/components/shared/TicketItem';
import isLogin from '@/middlewares/isLogin';
import { notFound } from 'next/navigation';
import React from 'react'

const DashboardDetailsSection = async () => {

  const isLoginUser = await isLogin();
  const isHavPlan = await getPlanDetails();
  const result = await getDashboard();
  const totalPrice = await getTotoalOrders();
  if (!result || !isLoginUser) return notFound();
  const { orders, tickets, requests } = result

  return (
    <div>
      
      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>بخش مالی</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        <div className='grid grid-cols-3 gap-2 mt-8'>
          <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100'>
            <p>موجودی کیف پول</p>
            <p>{isLoginUser.money.toLocaleString('fa')}</p>
            <p>تومان</p>
          </div>
          <div className='bg-gradient-to-r from-amber-500 to-yellow-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100'>
            {!isHavPlan && (
              <p >شما هیچ پلن فعالی ندارید</p>
            )}
            {isHavPlan && (
              <p className='text-grat-100'>شما تا {new Date(isHavPlan.expireTime).toLocaleDateString('fa-IR')} پلن فعال دارید</p>
            )}
          </div>
          <div className='bg-gradient-to-r from-blue-500 to-indigo-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100'>
            <p>مجموع خرید شما</p>
            <p>{Number(totalPrice).toLocaleString('fa')}</p>
            <p>تومان</p>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>سفارش های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        <div className="grid grid-cols-4 gap-x-2 mt-8">
          {orders.map(order => (
            <OrderItem order={order} />
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>تیکت های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        <div className="grid grid-cols-2 gap-2 gap-x-2 mt-8">
          {tickets.map(ticket => (
            <TicketItem ticket={ticket} />
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>درخواست های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        <div className="grid grid-cols-4 gap-2 gap-x-2 mt-8">
          {requests.map(request => (
            <RequestItem request={request} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default DashboardDetailsSection