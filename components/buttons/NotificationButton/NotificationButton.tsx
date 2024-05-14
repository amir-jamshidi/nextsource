import { NotificationsRounded } from '@mui/icons-material'
import React from 'react'

const NotificationButton = () => {
    return (
        <span className='w-10 h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
            <NotificationsRounded className='text-gray-300' />
        </span>
    )
}

export default NotificationButton