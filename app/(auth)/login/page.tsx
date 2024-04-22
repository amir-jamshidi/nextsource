import FormParents from '@/components/template/Login/FormParents'
import LoginBackButton from '@/components/template/Login/LoginBackButton'
import React from 'react'

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