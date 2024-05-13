import ToggleThemeButton from '@/components/buttons/ToggleThemeButton/ToggleThemeButton'
import React from 'react'
import LogoutButton from '@/components/buttons/LogoutButton/LogoutButton'

const UserPanelHeader = () => {
    return (
        <header>
            <div className='container h-16 bg-blue-light rounded-2xl mt-4 flex px-4'>
                <div className='flex-1 flex justify-start items-center'>
                    <LogoutButton />
                </div>
                <div className='flex-1 flex-center text-lg text-gray-200'>
                    <h2>پنل کاربری</h2>
                </div>
                <div className='flex-1 flex justify-end items-center'>
                    <ToggleThemeButton />
                </div>
            </div>
        </header>
    )
}

export default UserPanelHeader