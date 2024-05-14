import { FavoriteRounded } from '@mui/icons-material'
import React from 'react'

const UserPanelFooter = () => {
    return (
        <div className='flex-center mt-14 p-2 pb-3'>
            <div className='flex items-center text-gray-400 text-sm gap-x-1'>
                <p>طراحی شده با </p>
                <span>
                    <FavoriteRounded fontSize='small' className='text-red-500' />
                </span>
                <p>توسط امیر</p>
            </div>
        </div>
    )
}

export default UserPanelFooter