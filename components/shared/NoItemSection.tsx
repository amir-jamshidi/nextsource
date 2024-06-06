import Link from 'next/link'
import React from 'react'
import RequestButton from './RequestButton'
import isLogin from '@/middlewares/isLogin'

const NoItemSection = async () => {
  const isLoginUser = await isLogin();
  return (
    <div className='bg-blue-light rounded-xl h-64 flex-center mt-8'>
      <div className='flex-center justify-center flex-col gap-y-2.5'>
        <p className='text-xl text-gray-300'>سورســی پیدا نـشــد</p>
        <RequestButton isLoginUser={JSON.parse(JSON.stringify(isLoginUser))} title='درخواست سورس' href='/p-user/requests' />
      </div>
    </div>
  )
}

export default NoItemSection