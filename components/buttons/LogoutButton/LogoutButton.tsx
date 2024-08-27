'use client'

import { logout } from '@/actions/user.action'
import { PowerSettingsNewRounded } from '@mui/icons-material'
import React from 'react'


const LogoutButton = () => {
  
    const handleLogout = async () => {
            const res = await logout();
    }

    return (
        <span onClick={handleLogout} className='border-red-100 w-10 h-10 rounded-full flex-center bg-blue border dark:border-gray-300/10 cursor-pointer'>
            <PowerSettingsNewRounded className='text-red-500 transition-colors hover:text-red-600' />
        </span>
    )
}

export default LogoutButton