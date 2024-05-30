import ToggleThemeButton from '@/components/buttons/ToggleThemeButton/ToggleThemeButton'
import React from 'react'
import LogoutButton from '@/components/buttons/LogoutButton/LogoutButton'
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation'
import { HomeRounded, NotificationsRounded } from '@mui/icons-material'
import NotificationButton from '@/components/buttons/NotificationButton/NotificationButton'
import Link from 'next/link'

const UserPanelHeader = async () => {

    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();

    return (
        <header>
            <div className='container h-16 bg-blue-light rounded-2xl mt-4 flex px-4'>
                <div className='flex-1 flex justify-start items-center gap-x-2'>
                    <LogoutButton />
                    <div className='text-sm text-gray-300 flex items-center gap-x-1'>
                        <p>موجودی کیف پول</p>
                        <p className='font-dana-bold'>{isLoginUser.money.toLocaleString()}</p>
                        <p>تومان</p>
                    </div>
                </div>
                <div className='flex-1 flex-center text-lg text-gray-200'>
                    <h2>پنل کاربری</h2>
                </div>
                <div className='flex-1 flex justify-end items-center gap-x-1'>
                    <NotificationButton />
                    <ToggleThemeButton />
                    <Link href={`/`} className='w-10 h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
                        <HomeRounded className='text-gray-300' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default UserPanelHeader