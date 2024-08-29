'use client'

import Image from "next/image"
import Link from "next/link"
import notFoundImg from '@/public/assets/not-found.svg';
import { Metadata } from "next";

const error = () => {
    return (
        <div className='h-screen flex-center'>
            <div className='flex-center flex-col gap-y-6 pb-10'>
                <div className='flex flex-col justify-center - items-center gap-y-4'>
                    <Image alt="Not Found" height={200} width={200} src={notFoundImg} />
                </div>
                <h2 className='text-800-200 text-xl'>خطای ناشناخته ای رخ داد</h2>
                <Link href={'/'}>
                    <p className='text-amber-600 dark:text-amber-500'>بازگشت</p>
                </Link>
            </div>
        </div>
    )
}

export default error