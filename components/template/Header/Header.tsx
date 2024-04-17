import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    return (

        <header className='mt-2 mx-2'>
            <div className='h-20 dark:bg-secondary flex rounded-lg px-4'>
                <div className='flex-1'></div>
                <div className='flex-1 flex-center'>
                    <p className='text-lg md:text-xl text-amber-500'>نکستــ</p>
                    <Image priority alt='NextSource Logo App' src={'/assets/logo.svg'} width={64} height={64} />
                    <p className='text-lg md:text-xl text-amber-500'>ــسورس</p>
                </div>
                <div className='flex-1 flex justify-end items-center'>
                    <div className='rounded-full bg-primary text-sm'>
                        <Link className='pr-2 pl-1' href={'/login'}>
                            <span className='text-gray-800'>ثبت نام</span>
                        </Link>
                        <Link href={'/login'} className='border bg-gray-800 border-amber-500 rounded-full px-2 py-2 text-800-200 inline-block'>
                            <span className='text-amber-500'>ورود به حساب</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>

    )
}





export default Header