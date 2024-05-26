'use client'

import BackButton from "@/components/buttons/BackButton/BackButton"
import { RequestSchema } from "@/libs/Schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const InsertRequestSection = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ resolver: yupResolver(RequestSchema) })



    const handleSubmitForm = async (values: { caption: string, price: string, title: string }) => {
        try {   
            
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }

    return (
        <div>
            <div className="h-12 rounded-2xl mb-4 bg-blue-light relative flex items-center px-4">
                <BackButton bg={false} />
                <div className="flex gap-x-1">
                    {Object.entries(errors).length > 0 && (
                        <>
                            {Object.entries(errors).map(err => (
                                <p className="text-sm  py-0.5 bg-red-500 text-white rounded-lg px-3">{err[1].message}</p>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="grid grid-cols-2 gap-x-1">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl px-3">
                        <input {...register('title')} type="text" className="h-10 w-full bg-gray-900 outline-none border-none text-gray-200 text-sm" placeholder="عنوان درخواست"></input>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl px-3 flex items-center gap-x-2">
                        <input {...register('price')} type="number" className="h-10 w-full bg-gray-900 outline-none border-none text-gray-200 text-sm" placeholder="مبلغ پیشنهادی"></input>
                        <div className="text-sm flex items-center text-gray-400 gap-x-0.5 min-w-32 justify-end">
                            <p className="font-dana-bold">{Number(watch('price')).toLocaleString()}</p>
                            <p>تومان</p>
                        </div>
                    </div>
                </div>
                <div className="mt-1 bg-gray-900 mb-1 border border-gray-800 rounded-xl">
                    <textarea {...register('caption')} placeholder="توضیحات کامل سورس مدنظر ..." className="min-h-44 max-h-52 w-full bg-gray-900 rounded-xl text-sm outline-none border-none text-gray-200 p-3" />
                </div>
                <button className="bg-blue w-full rounded-xl py-2.5 text-gray-200">ارسال درخواست</button>
            </form>
        </div>
    )
}

export default InsertRequestSection