'use client'
import React, { useState } from 'react'
import ProductSectionTitle from '../shared/ProductSectionTitle'
import { Rating } from '@mui/material'
import toast from 'react-hot-toast'
import { addNewComment } from '@/actions/comment.action'
import { IUser } from '@/types/user'
import { useRouter } from 'next/navigation'

interface CommentFormProps {
    productID: string,
    isLoginUser: boolean | IUser
}

const CommentForm = ({ productID, isLoginUser }: CommentFormProps) => {

    const [body, setBody] = useState('')
    const [rate, setRate] = useState(0);

    const router = useRouter();

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (body.trim().length < 3) return toast.error('متن نظر حداقل سه کاراکتر باید باشه')
        if (rate === 0 || rate > 5) return toast.error('لطفا امتیاز به سورس رو مشخص کن')
        try {
            const result = await addNewComment(body, rate, productID)
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setBody('');
            setRate(0);
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته')
        }
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
                    <input disabled={!isLoginUser} type="submit" value={!isLoginUser ? 'لطفا وارد حساب شو' : 'فرستادن'} className={`${!isLoginUser ? 'cursor-not-allowed' : 'cursor-pointer'} w-full py-3 bg-blue rounded-xl text-gray-300`} />
                </form>
            </div>
        </section>
    )
}

export default CommentForm