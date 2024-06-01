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
import DashboardTitleSection from './DashboardTitleSection';

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
          <p className='hidden md:flex'>امروز</p>
          <p className="text-xs">{new Date().toLocaleString('fa', { weekday: 'long' })}</p>
        </div>
        <div className='flex-1 flex justify-center'>
          <p className='line-clamp-1 hidden md:flex'>خوش اومـــدی {isLoginUser.fullname} جـــان</p>
          <p className='line-clamp-1 flex md:hidden'>خوش اومدی {isLoginUser.fullname}</p>
        </div>
        <div className='flex-1 flex justify-end'>

        </div>
      </div>

      <div className='mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm'>
        <div className='h-24 md:h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {orderCount.toLocaleString('fa')} سورس تهیه کردید </p>
        </div>
        <div className='h-24 md:h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {ticketCount.toLocaleString('fa')} تیکت ارسال کردید </p>
        </div>
        <div className='h-24 md:h-32 bg-blue-light flex-center rounded-2xl text-gray-200'>
          <p >شما تا الان {requestCount.toLocaleString('fa')} درخواست ارسال کردید </p>
        </div>
      </div>

      <div className='mt-5 md:mt-8'>
        <DashboardTitleSection title="سفارش هــای اخیـر" />
        {orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
            {orders.map(order => (
              <OrderItem order={order} />
            ))}
          </div>
        ) : (<NoItemUserPanel title="تا الان سفارشی ثبت نکردی" />)}

      </div>

      <div className='mt-5 md:mt-8'>
        <DashboardTitleSection title='تیکت هـای اخیـر' />
        {tickets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
            {tickets.map(ticket => (
              <TicketItem ticket={ticket} />
            ))}
          </div>
        ) : (<NoItemUserPanel title="تا الان تیکتی نفرستادی" />)}

      </div>

      <div className='mt-5 md:mt-8'>
        <DashboardTitleSection title='درخواست هـای اخیـر' />
        {requests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
            {requests.map(request => (
              <RequestItem request={request} />
            ))}
          </div>)
          : (<NoItemUserPanel title='تا الان درخواستی ثبت نکردی' />)}

      </div>



      <div className='mt-5 md:mt-8'>
        <DashboardTitleSection title='بخش مالــی' />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8'>
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