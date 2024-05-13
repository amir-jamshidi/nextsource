import { PowerSettingsNewRounded } from '@mui/icons-material'
import React from 'react'

const LogoutButton = () => {
    return (
        <span className='w-10 h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
            <PowerSettingsNewRounded className='text-red-500' />
        </span>
    )
}

export default LogoutButton