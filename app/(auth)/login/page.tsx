import FormParents from '@/components/template/Login/FormParents'
import LoginBackButton from '@/components/template/Login/LoginBackButton'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "نکست سورس | ورود یا ثبت نام"
}

const page = () => {
    return (
        <div className='h-screen flex-center flex-col '>
            <div className='bg-login absolute inset-0 z-[-1]'></div>
            <FormParents />
            <LoginBackButton />
        </div>
    )
}

export default page