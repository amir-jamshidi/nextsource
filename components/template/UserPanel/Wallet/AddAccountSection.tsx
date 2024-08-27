'use client'

import Modal from '@/components/shared/Modal';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountSchema } from '@/libs/Schemas';
import { addNewAccount } from '@/actions/account.action';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddAccountSection = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const router = useRouter();

    const { handleSubmit, reset, formState: { errors, isSubmitting, defaultValues }, register } = useForm({ resolver: yupResolver(AccountSchema) })

    const handleSubmitForm = async (values: { cardNumber: string, cardBank: string, cardShaba: string, cardName: string }) => {
        try {
            const res = await addNewAccount(values);
            if (!res.state) return toast.error(res.message);
            setIsShowModal(false);
            reset(defaultValues)
            toast.success(res.message);
            router.refresh();
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }

    const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsShowModal(false);
    }

    return (
        <>
            <Modal isShow={isShowModal}>
                <div className='flex flex-col items-center'>
                    <h2 className='text-xl text-gray-200 py-4'>اضافه کردن کارت بانکی</h2>
                    {Object.entries(errors).length > 0 && (
                        <div className='flex flex-wrap gap-1 mb-2'>
                            {Object.entries(errors).map(error => (
                                <p className='bg-red-500 rounded px-2 text-sm text-gray-200' key={error[1].message}>{error[1].message}</p>
                            ))}
                        </div>
                    )}
                    <div className='w-full'>
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <div className='flex flex-col gap-y-1 text-sm'>
                                <div className='h-10 bg-input-container rounded-xl '>
                                    <input {...register('cardNumber')} type="text" placeholder='شماره کارت' className='rounded-xl border-none outline-none text-gray-300 bg-input h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-input-container rounded-xl '>
                                    <input {...register('cardBank')} type="text" placeholder='نام بانک' className='rounded-xl border-none outline-none text-gray-300 bg-input h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-input-container rounded-xl '>
                                    <input {...register('cardShaba')} type="text" placeholder='شماره شبا' className='rounded-xl border-none outline-none text-gray-300 bg-input h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-input-container rounded-xl '>
                                    <input {...register('cardName')} type="text" placeholder='نام صاحب کارت' className='rounded-xl border-none outline-none text-gray-300 bg-input h-10 w-full text-center' />
                                </div>
                                <button disabled={isSubmitting} className='h-10 mt-1 text-gray-200 bg-green-500 rounded-xl'>{isSubmitting ? 'لطفا صبر کن ...' : 'اضافه کن'}</button>
                                <button onClick={handleCloseModal} className='h-10 text-gray-200 bg-red-500 rounded-xl'>بیخیال</button>
                            </div>
                            <p className='text-amber-500 text-sm text-center py-2'>کارت بانکی باید متعلق به خود شما باشد</p>
                        </form>
                    </div>
                </div>
            </Modal>
            <button onClick={() => setIsShowModal(true)} className='h-10 rounded-xl text-gray-100 dark:text-gray-300 bg-btns text-sm px-3'>اضافه کردن کارت بانکی</button>
        </>
    )
}

export default AddAccountSection