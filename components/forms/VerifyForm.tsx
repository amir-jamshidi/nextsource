'use client'
import { FingerprintRounded } from '@mui/icons-material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { VerifyFormSchema } from "@/libs/Schemas"
import { VerifyCodeUser } from "@/actions/user.action"
import toast from "react-hot-toast"
import { useState } from "react"
import ToastPromise from "@/libs/ToastPromise"

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

    const promise = VerifyCodeUser(phone, Number(code))
      .then(result => {
        if (!result.state) return toast.error(result.message);
        //Redirect
      })
      .catch(_ => { toast.error('خطای ناشناخته') })
      .finally(() => { setIsLoading(false) })

  }

  return (
    <div className='w-96 bg-blue px-4 py-6 rounded-xl flex-center flex-col'>
      <h1 className='text-800-200 font-morabba text-xl'>تایید شماره تلفن</h1>
      <form className='w-full mt-4 flex flex-col gap-1' onSubmit={handleSubmit(handleVerifyForm)}>
        <div className='bg-gray-900 rounded-xl px-2 flex items-center gap-x-1.5'>
          <span>
            <FingerprintRounded className='text-700-300' />
          </span>
          <input {...register('code')}
            type="text"
            className='w-full py-2 bg-gray-900  rounded-xl border-none outline-none text-700-300'
            placeholder='کد تایید پنچ رقمی' />
        </div>
        <input
          type="submit"
          disabled={isLoading}
          className={`${isLoading ? 'bg-gray-500' : 'bg-button'} transition-colors w-full py-2 cursor-pointer rounded-xl text-center text-gray-200 outline-none border-none`} value={isLoading ? 'لطفا صبر کنید ...' : 'تایید کد'} />
      </form>
      <span className="font-morabba mt-4 text-blue-500 text-sm">به راهنمایی نیاز داری ؟</span>
    </div>
  )
}

export default VerifyForm