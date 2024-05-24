'use client'

import Modal from '@/components/shared/Modal';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountSchema } from '@/libs/Schemas';

const AddAccountSection = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const { handleSubmit, formState: { errors }, register } = useForm({ resolver: yupResolver(AccountSchema) })

    const handleSubmitForm = async (values: {}) => {
        try {
            console.log(values);
        } catch (error) {

        }
    }

    return (
        <>
            <Modal isShow={isShowModal}>
                <div className='flex flex-col items-center'>
                    <h2 className='text-xl text-gray-200 py-4'>اضافه کردن کارت بانکی</h2>
                    <div className='w-full'>
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <div className='flex flex-col gap-y-1 text-sm'>
                                <div className='h-10 bg-gray-900 rounded-xl px-2'>
                                    <input {...register('cardNumber')} type="text" placeholder='شماره کارت' className='border-none outline-none text-gray-300 bg-gray-900 h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-gray-900 rounded-xl px-2'>
                                    <input {...register('cardBank')} type="text" placeholder='نام بانک' className='border-none outline-none text-gray-300 bg-gray-900 h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-gray-900 rounded-xl px-2'>
                                    <input {...register('cardShaba')} type="text" placeholder='شماره شبا' className='border-none outline-none text-gray-300 bg-gray-900 h-10 w-full text-center' />
                                </div>
                                <div className='h-10 bg-gray-900 rounded-xl px-2'>
                                    <input {...register('cardName')} type="text" placeholder='نام صاحب کارت' className='border-none outline-none text-gray-300 bg-gray-900 h-10 w-full text-center' />
                                </div>
                                <button className='h-10 mt-1 text-gray-200 bg-green-500 rounded-xl'>اضافه کن</button>
                            </div>
                            <p className='text-amber-500 text-sm text-center py-2'>کارت بانکی باید متعلق به خود شما باشد</p>
                        </form>
                    </div>
                </div>
            </Modal>
            <button onClick={() => setIsShowModal(true)} className='h-10 rounded-xl text-gray-200 bg-blue text-sm px-3'>اضافه کردن کارت بانکی</button>
        </>
    )
}

export default AddAccountSection