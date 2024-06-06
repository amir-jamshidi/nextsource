'use client'

import { IUser } from '@/types/user'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

interface RequestButtonProps {
    isLoginUser: IUser | boolean
}

const RequestButton = ({ isLoginUser }: RequestButtonProps) => {

    const router = useRouter()

    const handleRequest = () => {
        if (!isLoginUser) return toast.error('برای درخواست سورس وارد حساب شو')
        router.push('/p-user/requests');
    }

    return (
        <button onClick={handleRequest} className="bg-blue px-4 py-2.5 rounded-full text-gray-200 text-sm">درخواست سورس کد</button>
    )
}

export default RequestButton