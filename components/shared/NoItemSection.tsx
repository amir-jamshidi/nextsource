import Link from 'next/link'
import React from 'react'

const NoItemSection = () => {
  return (
    <div className='bg-blue-light rounded-xl h-64 flex-center mt-8'>
      <div className='flex-center justify-center flex-col gap-y-2.5'>
        <p className='text-xl text-gray-300'>سورســی پیدا نـشــد</p>
        <Link href={`/p-user/requests`}>
          <p className="text-sm text-amber-500">ثبت درخواست سورس</p>
        </Link>
      </div>
    </div>
  )
}

export default NoItemSection