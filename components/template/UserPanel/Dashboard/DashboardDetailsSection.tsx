import { getTotoalOrders } from '@/actions/order.action';
import { getPlanDetails } from '@/actions/orderPlan.action';
import { getDashboard } from '@/actions/user.action'
import OrderItem from '@/components/shared/OrderItem';
import RequestItem from '@/components/shared/RequestItem';
import TicketItem from '@/components/shared/TicketItem';
import isLogin from '@/middlewares/isLogin';
import { notFound } from 'next/navigation';
import React from 'react'
import NoItemUserPanel from './../../../shared/NoItemUserPanel';

const DashboardDetailsSection = async () => {

  const isLoginUser = await isLogin();
  const isHavPlan = await getPlanDetails();
  const result = await getDashboard();

  const totalPrice = await getTotoalOrders();
  if (!result || !isLoginUser) return notFound();
  const { orders, tickets, requests, orderCount, ticketCount, requestCount } = result

  return (
    <div>
      <div className='h-12 flex items-center text-sm bg-blue-light rounded-xl flex-center text-gray-100 px-4'>
        <div className='flex-1 flex justify-start gap-x-1'>
          <p>امروز</p>
          <p>{new Date().toLocaleString('fa', { weekday: 'long' })}</p>
        </div>
        <div className='flex-1 flex justify-center'>
          <p>خوش اومـــدی {isLoginUser.fullname} جـــان</p>
        </div>
        <div className='flex-1 flex justify-end'>

        </div>
      </div>

      <div className='mt-8 grid grid-cols-3 gap-x-2 text-sm'>
        <div className='h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {orderCount.toLocaleString('fa')} سورس تهیه کردید </p>
        </div>
        <div className='h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {ticketCount.toLocaleString('fa')} تیکت ارسال کردید </p>
        </div>
        <div className='h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {requestCount.toLocaleString('fa')} درخواست ارسال کردید </p>
        </div>
      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>سفارش های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        {orders.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-2 mt-8">
            {orders.map(order => (
              <OrderItem order={order} />
            ))}
          </div>
        ) : (<NoItemUserPanel title="تا الان سفارشی ثبت نکردی" />)}

      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>تیکت های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        {tickets.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 gap-x-2 mt-8">
            {tickets.map(ticket => (
              <TicketItem ticket={ticket} />
            ))}
          </div>
        ) : (<NoItemUserPanel title="تا الان تیکتی نفرستادی" />)}

      </div>

      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>درخواست های اخیر</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        {requests.length > 0 ? (
          <div className="grid grid-cols-4 gap-2 gap-x-2 mt-8">
            {requests.map(request => (
              <RequestItem request={request} />
            ))}
          </div>)
          : (<NoItemUserPanel title='تا الان درخواستی ثبت نکردی' />)}

      </div>


      <div className='mt-8'>
        <div className=' flex items-center gap-x-2 text-sm'>
          <span className='flex h-px bg-gray-800 flex-1'></span>
          <p className='text-gray-400'>بخش مالی</p>
          <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
        <div className='grid grid-cols-3 gap-2 mt-8'>
          <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100 text-sm'>
            <p>موجودی کیف پول</p>
            <p>{isLoginUser.money.toLocaleString('fa')}</p>
            <p>تومان</p>
          </div>
          <div className='bg-gradient-to-r from-amber-500 to-yellow-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100 text-sm'>
            {!isHavPlan && (
              <p >شما هیچ پلن فعالی ندارید</p>
            )}
            {isHavPlan && (
              <p className='text-grat-100'>شما تا {new Date(isHavPlan.expireTime).toLocaleDateString('fa-IR')} پلن فعال دارید</p>
            )}
          </div>
          <div className='bg-gradient-to-r from-blue-500 to-indigo-500 h-32 rounded-2xl flex-center gap-x-1 text-gray-100 text-sm'>
            <p>مجموع خرید شما</p>
            <p>{Number(totalPrice).toLocaleString('fa')}</p>
            <p>تومان</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default DashboardDetailsSection