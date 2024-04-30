'use client'
import React, { useState } from 'react'
import ProductSectionTitle from '../shared/ProductSectionTitle'
import { Rating } from '@mui/material'
import toast from 'react-hot-toast'

const CommentForm = () => {

    const [body, setBody] = useState('')
    const [rate, setRate] = useState(0);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (body.trim().length < 3) return toast.error('متن نظر حداقل سه کاراکتر باید باشه')
        if (rate === 0 || rate > 5) return toast.error('لطفا امتیاز به سورس رو مشخص کن')
    }

    return (
        <section className="bg-blue px-6 py-6 rounded-xl mt-8">
            <ProductSectionTitle title='ارسال نظر' />
            <div className='w-full mt-4'>
                <form onSubmit={handleSubmitForm} className='flex flex-col gap-1'>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='نظرتو اینجا بنویس ...' name="" id="" className='w-full outline-none border-none rounded-xl bg-gray-800/30 px-2 py-2 text-gray-300 min-h-40 max-h-44' />
                    <div dir='ltr' className='w-full bg-gray-800/30 flex-center py-3 rounded-xl'>
                        <Rating name="text-feedback" value={rate} onChange={(e, value) => setRate(Number(value))} />
                    </div>
                    <input type="submit" value="فرستادن" className='w-full py-3 bg-blue rounded-xl text-gray-300' />
                </form>
            </div>
        </section>
    )
}

export default CommentForm