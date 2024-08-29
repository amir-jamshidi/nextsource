import LogoutButton from '@/components/buttons/LogoutButton/LogoutButton'
import React from 'react'

const LoginBeforeSection = () => {
    return (
        <div className='w-[350px] bg-blue px-4 py-6 rounded-2xl border-section flex-col flex items-center justify-center gap-y-6'>
            <p className="text-800-200 text-center">شما لاگین هستی در صورت تمایل خارج شوید</p>
            <LogoutButton />
        </div>
    )
}

export default LoginBeforeSection