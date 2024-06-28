import FormParents from '@/components/template/Login/FormParents'
import LoginBackButton from '@/components/template/Login/LoginBackButton'
import LoginBeforeSection from '@/components/template/Login/LoginBeforeSection'
import isLogin from '@/middlewares/isLogin'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "نکست سورس | ورود یا ثبت نام"
}

const page = async () => {

    const isLoginUser = await isLogin();

    return (
        <div className='h-screen flex-center flex-col '>
            {!isLoginUser ?
                (
                    <>
                        <FormParents />
                        <LoginBackButton />
                    </>
                )
                :
                (
                    <LoginBeforeSection />
                )
            }
            <div className='bg-login absolute inset-0 z-[-1]'></div>

        </div>
    )
}

export default page