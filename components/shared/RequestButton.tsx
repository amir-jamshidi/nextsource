'use client'

import { IUser } from '@/types/user'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

interface RequestButtonProps {
    isLoginUser: IUser | boolean,
    title: string,
    href: string
}

const RequestButton = ({ isLoginUser, title, href }: RequestButtonProps) => {

    const router = useRouter()

    const handleRequest = () => {
        if (!isLoginUser) return toast.error(`برای ${title} باید وارد حساب بشی`)
        router.push(href);
    }

    return (
        <button onClick={handleRequest} className="bg-btns px-4 py-2.5 rounded-full text-white dark:text-gray-200 text-sm">{title}</button>
    )
}

export default RequestButton