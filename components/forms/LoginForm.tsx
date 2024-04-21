'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "@/libs/Schemas"
import { LoginUser } from "@/actions/user.action"

interface LoginFormProps {
    handleChangeState: (phone: string) => void
}

const LoginForm = ({ handleChangeState }: LoginFormProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema)
    })

    const handleLoginForm = async ({ phone }: { phone: string }) => {
        try {
            await LoginUser(phone);
            handleChangeState(phone);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-96 bg-secondary px-4 py-4 rounded-xl flex-center flex-col'>
            <h1 className='text-800-200 font-morabba text-xl'>ورود به حساب یا ثبت نام</h1>
            <form className='w-full mt-2 flex flex-col gap-1' onSubmit={handleSubmit(handleLoginForm)}>
                <div className='bg-gray-900 rounded-xl px-2'>
                    <input {...register('phone')} type="text" className='w-full py-2 bg-gray-900 rounded-xl border-none outline-none text-700-300' placeholder='شماره همراه' />
                </div>
                <input type="submit" className='w-full py-2 cursor-pointer rounded-xl text-center bg-button text-gray-200 outline-none border-none' value='ورود به حساب' />
            </form>
        </div>
    )
}

export default LoginForm