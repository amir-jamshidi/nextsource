import { FavoriteRounded } from '@mui/icons-material'
import React from 'react'

const UserPanelFooter = () => {
    return (
        <div className='container'>
            <div className='flex-center h-16 mt-14 p-2 pb-3 bg-blue-light rounded-2xl mb-4'>
                <div className='flex items-center text-gray-300 text-sm gap-x-1'>
                    <p>طراحی شده با </p>
                    <span>
                        <FavoriteRounded fontSize='small' className='text-red-500' />
                    </span>
                    <p>توسط امیر حسین جمشیدی</p>
                </div>
            </div>
        </div>
    )
}

export default UserPanelFooter