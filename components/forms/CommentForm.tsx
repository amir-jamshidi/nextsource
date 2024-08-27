'use client'
import React, { useState } from 'react'
import ProductSectionTitle from '../shared/ProductSectionTitle'
import { Rating } from '@mui/material'
import toast from 'react-hot-toast'
import { addNewComment } from '@/actions/comment.action'
import { IUser } from '@/types/user'
import { StarRounded } from '@mui/icons-material'

interface CommentFormProps {
    productID: string,
    isLoginUser: boolean | IUser
}

const CommentForm = ({ productID, isLoginUser }: CommentFormProps) => {

    const [body, setBody] = useState('')
    const [rate, setRate] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (body.trim().length < 3) return toast.error('متن نظر حداقل سه کاراکتر باید باشه')
        if (rate === 0 || rate > 5) return toast.error('لطفا امتیاز به سورس رو مشخص کن')
        try {
            setIsLoading(true)
            const result = await addNewComment(body, rate, productID)
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setBody('');
            setRate(0);
        } catch (error) {
            toast.error('خطای ناشناخته')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="bg-blue md:px-6 md:py-6 px-3 py-4 rounded-xl mt-8">
            <ProductSectionTitle title='ارسال نظر' />
            <div className='w-full mt-4'>
                <form onSubmit={handleSubmitForm} className='flex flex-col gap-1'>
                    <div className='border rounded-xl bg-input-container'>
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='نظرتو اینجا بنویس ...' name="" id="" className='w-full outline-none bg-input rounded-xl px-2 py-2 min-h-40 max-h-44 text-sm' />
                    </div>
                    <div dir='ltr' className='w-full bg-input-container flex-center py-3 rounded-xl'>
                        <Rating sx={{ border: 'red' }} name="hover-feedback" value={rate} onChange={(e, value) => setRate(Number(value))} emptyIcon={<StarRounded className='text-gray-400' style={{ opacity: 0.55 }} fontSize="inherit" />} />
                    </div>
                    <input disabled={!isLoginUser || isLoading} type="submit" value={!isLoginUser ? 'لطفا وارد حساب شو' : isLoading ? 'لطفا صبر کنید ...' : 'فرستادن'} className={`disabled:cursor-not-allowed cursor-pointer w-full py-3 bg-btns rounded-xl text-gray-100 dark:text-gray-300`} />
                </form>
            </div>
        </section>
    )
}

export default CommentForm