import React from 'react'

interface UserPanelTitleProps {
    title: string
}

const UserPanelTitle = ({ title }: UserPanelTitleProps) => {
    return (
        <div className='flex mt-8 mb-8 items-center gap-x-4 mx-2'>
            <span className='flex flex-1 h-px bg-gray-200 dark:bg-gray-800/50'></span>
            <p className='text-base md:text-2xl text-700-300'>{title}</p>
            <span className='flex flex-1 h-px bg-gray-200 dark:bg-gray-800/50'></span>
        </div>
    )
}

export default UserPanelTitle