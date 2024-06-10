'use client'

import { logout } from '@/actions/user.action'
import { PowerSettingsNewRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const LogoutButton = () => {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await logout();
            if (!res.state) return toast.error('خطای ناشناخته ای رخ داد')
            toast.success(res.message);
            router.replace('/');
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته ای رخ داد')
        }
    }

    return (
        <span onClick={handleLogout} className='w-10 h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
            <PowerSettingsNewRounded className='text-red-500 transition-colors hover:text-red-600' />
        </span>
    )
}

export default LogoutButton