import FormParents from '@/components/template/Login/FormParents'
import { ArrowBackRounded } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen flex-center flex-col '>
            <div className='bg-login absolute inset-0 z-[-1]'></div>
            <FormParents />
            <Link href={'/'}>
                <div className='w-72 py-3 px-4 rounded-full bg-blue mt-5 transition-all flex items-center justify-center'>
                    <p className='text-white text-sm'>بازگشت به صفحه اصلی</p>
                </div>
            </Link>
        </div>
    )
}

export default page