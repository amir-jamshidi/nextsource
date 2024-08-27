import ToggleThemeButton from '@/components/buttons/ToggleThemeButton/ToggleThemeButton'
import React from 'react'
import LogoutButton from '@/components/buttons/LogoutButton/LogoutButton'
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation'
import { HomeRounded } from '@mui/icons-material'
import NotificationButton from '@/components/buttons/NotificationButton/NotificationButton'
import Link from 'next/link'

const UserPanelHeader = async () => {

    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();

    return (
        <header className='mx-2 md:mx-0'>
            <div className='container h-16 bg-blue rounded-2xl mt-4 flex px-4 border-section'>
                <div className='flex-1 flex justify-start items-center gap-x-2'>
                    <LogoutButton />
                    <div className='text-xs md:text-sm text-700-300 flex items-center gap-x-1'>
                        <p className='hidden md:flex'>موجودی کیف پول</p>
                        <p className='flex md:hidden'>موجودی</p>
                        <p className='font-dana-bold'>{isLoginUser.money.toLocaleString()}</p>
                        <p>تومان</p>
                    </div>
                </div>
                <div className='flex-1 hidden md:flex md:flex-center text-lg text-800-200'>
                    <h2>پنل کاربری</h2>
                </div>
                <div className='flex-1 flex justify-end items-center gap-x-1'>
                    <ToggleThemeButton />
                    <NotificationButton />
                    <Link href={`/`} className='border-gray-200 w-9 h-9 md:w-10 md:h-10 rounded-full flex-center bg-blue border dark:border-gray-300/10 cursor-pointer'>
                        <HomeRounded className='text-gray-600 dark:text-gray-300' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default UserPanelHeader