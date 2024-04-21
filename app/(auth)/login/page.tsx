import FormParents from '@/components/template/Login/FormParents'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen flex-center flex-col'>
            <FormParents />
            <div className='w-72 py-3 px-4 rounded-full bg-blue mt-5 transition-all '>
                <p className='text-white text-sm'>بازگشت به صفحه اصلی</p>
            </div>
        </div>
    )
}

export default page