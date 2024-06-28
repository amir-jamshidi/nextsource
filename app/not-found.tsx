import { SearchOffRounded } from '@mui/icons-material'
import { Metadata } from 'next'
import React from 'react'
import notFoundImg from '@/public/assets/not-found.svg'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'صفحه پیدا نشد 404'
}

const NotFound = () => {
    return (
        <div className='h-screen flex-center'>
            <div className='flex-center flex-col gap-y-6 pb-10'>
                <div className='flex flex-col justify-center - items-center gap-y-4'>
                    <Image alt="Not Found" height={200} width={200} src={notFoundImg} />
                </div>
                <h2 className='text-gray-200 text-xl'>صفحه مورد نظر پیدا نشد</h2>
                <Link href={'/'}>
                    <p className='text-gray-200'>بازگشت</p>
                </Link>
            </div>
        </div>
    )
}
export default NotFound