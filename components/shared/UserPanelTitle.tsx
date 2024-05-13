import React from 'react'

interface UserPanelTitleProps {
    title: string
}

const UserPanelTitle = ({ title }: UserPanelTitleProps) => {
    return (
        <div className='flex mt-8 mb-8 items-center gap-x-4 mx-3'>
            <span className='flex flex-1 h-px bg-gray-800/50'></span>
            <p className='text-2xl text-gray-200'>{title}</p>
            <span className='flex flex-1 h-px bg-gray-800/50'></span>
        </div>
    )
}

export default UserPanelTitle