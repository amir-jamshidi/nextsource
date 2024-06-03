'use client'

import { addNewRequest } from "@/actions/request.action"
import BackButton from "@/components/buttons/BackButton/BackButton"
import { RequestSchema } from "@/libs/Schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const InsertRequestSection = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch
    } = useForm({ resolver: yupResolver(RequestSchema) })

    const handleSubmitForm = async (values: { caption: string, price: string, title: string }) => {
        try {
            const res = await addNewRequest(values);
            if (!res.state) return toast.error(res.message);
            toast.success(res.message);
            reset({ title: '', price: '', caption: '' })
            router.push('/p-user/requests');
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }

    return (
        <div>
            <div className="h-12 rounded-2xl mb-4 bg-blue-light relative flex items-center px-4">
                <BackButton bg={false} />
                <div className="flex flex-wrap gap-1">
                    {Object.entries(errors).length > 0 && (
                        <>
                            {Object.entries(errors).map(err => (
                                <p key={err[1].message} className="text-xs md:text-sm py-0.5 bg-red-500 text-white rounded-lg px-3">{err[1].message}</p>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-1">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl px-3">
                        <input {...register('title')} type="text" className="h-12 w-full bg-gray-900 outline-none border-none text-gray-200 text-sm" placeholder="عنوان درخواست"></input>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl px-3 flex items-center gap-x-2">
                        <input {...register('price')} type="number" className="h-12 w-full bg-gray-900 outline-none border-none text-gray-200 text-sm" placeholder="مبلغ پیشنهادی"></input>
                        <div className="text-sm flex items-center text-gray-400 gap-x-0.5 min-w-32 justify-end">
                            <p className="font-dana-bold">{watch('price') ? Number(watch('price')).toLocaleString() : '0'}</p>
                            <p>تومان</p>
                        </div>
                    </div>
                </div>
                <div className="mt-1 bg-gray-900 mb-1 border border-gray-800 rounded-xl">
                    <textarea {...register('caption')} placeholder="توضیحات کامل سورس مدنظر ..." className="min-h-44 max-h-52 w-full bg-gray-900 rounded-xl text-sm outline-none border-none text-gray-200 p-3" />
                </div>
                <input disabled={isSubmitting} type="submit" className={`h-12 w-full bg-blue mt-1 rounded-xl ${isSubmitting ? 'text-gray-500' : 'text-gray-200'} cursor-pointer transition-colors`} value={isSubmitting ? 'لطفا صبر کن ...' : 'ارسال درخواست'} />
            </form>
        </div>
    )
}

export default InsertRequestSection