'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "@/libs/Schemas"
import { LoginUser } from "@/actions/user.action"
import { useState } from "react"
import { PhoneRounded } from "@mui/icons-material"
import toast from "react-hot-toast"

interface LoginFormProps {
    handleChangeState: (phone: string) => void
}
 
const LoginForm = ({ handleChangeState }: LoginFormProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema)
    })

    const handleLoginForm = ({ phone }: { phone: string }) => {

        setIsLoading(true)
        LoginUser(phone)
            .then(res => {
                if (!res.state) return toast.error('خطای ناشناخته')
                handleChangeState(phone);
                toast.success('کد تایید ارسال شد')
            })
            .catch(_ => {
                toast.error('خطای ناشناخته')
            })
            .finally(() => {
                setIsLoading(true)
            })
    }

    return (
        <div className='w-[350px] md:w-[380px] bg-blue px-4 py-6 rounded-2xl flex-center flex-col'>
            <h1 className='text-800-200 font-morabba text-xl mb-2'>ورود یا ثبت نام</h1>
            <div>
                {Object.entries(errors).map(error => (
                    <span className='text-sm text-red-700' key={error[0]}>{error[1].message}</span>
                ))}
            </div>
            <form className='w-full mt-3 flex flex-col gap-1' onSubmit={handleSubmit(handleLoginForm)}>
                <div className='bg-input-container rounded-xl px-2 flex items-center gap-x-1.5'>
                    <span>
                        <PhoneRounded className='text-700-300' />
                    </span>
                    <input {...register('phone')}
                        autoComplete='off'
                        type="text"
                        className='w-full py-2 bg-input h-[50px] rounded-xl border-none outline-none text-700-300'
                        placeholder='شماره همراه' />
                </div>
                <input
                    type="submit"
                    disabled={isLoading}
                    className={`${isLoading ? 'bg-gray-500' : 'bg-gradient-to-r from-green-400 to-green-500'} h-[50px] transition-colors w-full py-2 cursor-pointer rounded-xl text-center text-gray-100 dark:text-gray-200 outline-none border-none`} value={isLoading ? 'لطفا صبر کنید ...' : 'ورود به سیستم'} />
            </form>
            <span className="font-morabba mt-5 mb-1 text-blue-500 text-sm">به راهنمایی نیاز داری ؟</span>
        </div>
    )
}

export default LoginForm