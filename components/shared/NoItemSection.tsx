import Link from 'next/link'
import React from 'react'

const NoItemSection = () => {
  return (
    <div className='bg-gray-800/30 rounded-xl h-64 flex-center mt-8'>
      <div className='flex-center justify-center flex-col gap-y-2.5'>
        <p className='text-xl text-gray-300'>سورسی پیدا نشد</p>
        <p className='text-base text-gray-400 flex gap-0.5'>اگه دنبال سورسی هستی که پیداش نمیکنی میتونی
          <Link href={'/request'} className='text-amber-600/90'>
            درخواست سورس
          </Link>
          بدی</p>
      </div>
    </div>
  )
}

export default NoItemSection