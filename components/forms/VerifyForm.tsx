'use client'

import { FingerprintRounded } from '@mui/icons-material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { VerifyFormSchema } from "@/libs/Schemas"
import { VerifyCodeUser } from "@/actions/user.action"
import toast from "react-hot-toast"
import { useState } from "react"
import { useRouter } from 'next/navigation'

interface VerifyFormProps {
  phone: string
}

const VerifyForm = ({ phone }: VerifyFormProps) => {

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VerifyFormSchema)
  })

  const handleVerifyForm = ({ code }: { code: string }) => {

    setIsLoading(true);
    VerifyCodeUser(phone, Number(code))
      .then(result => {
        if (!result.state) return toast.error(result.message);
      })
      .catch(_ => { toast.success('ورود انجام شد') })
      .finally(() => { setIsLoading(false) })
  }

  return (
    <div className='w-[350px] md:w-[380px] bg-blue px-4 py-6 rounded-2xl flex-center flex-col'>
      <h1 className='text-800-200 font-morabba text-xl mb-2'>تایید شماره همراه</h1>
      <div>
        {Object.entries(errors).map(error => (
          <span className='text-sm text-red-700' key={error[0]}>{error[1].message}</span>
        ))}
      </div>
      <form className='w-full mt-3 flex flex-col gap-1' onSubmit={handleSubmit(handleVerifyForm)}>
        <div className='bg-input-container rounded-xl px-2 flex items-center gap-x-1.5'>
          <span>
            <FingerprintRounded className='text-700-300' />
          </span>
          <input {...register('code')}
            autoComplete='off'
            type="text"
            className='w-full py-2 bg-input h-[50px]  rounded-xl border-none outline-none text-700-300'
            placeholder='کد تایید پنچ رقمی' />
        </div>
        <input
          type="submit"
          disabled={isLoading}
          className={`${isLoading ? 'bg-gray-500' : 'bg-gradient-to-r from-green-400 to-green-500'} transition-colors w-full h-[50px] py-2 cursor-pointer rounded-xl text-center text-gray-100 dark:text-gray-200 outline-none border-none`} value={isLoading ? 'لطفا صبر کنید ...' : 'تایید کد'} />
      </form>
      <span className="font-morabba mt-5 mb-1 text-blue-500 text-sm">به راهنمایی نیاز داری ؟</span>
    </div>
  )
}


export default VerifyForm