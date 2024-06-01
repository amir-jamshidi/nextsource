'use client'

import { changeInfos } from '@/actions/user.action';
import { IUser } from '@/types/user';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const UserInfoSection = ({ user }: { user: IUser }) => {

  const [fullname, setFullname] = useState(() => user.fullname);
  const [email, setEmail] = useState(() => user.email);
  const [phone, setPhone] = useState(() => user.phone);
  const [bio, setBio] = useState(() => user.bio);

  const router = useRouter()

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (fullname.trim().length < 3) return toast.error('نام شما حداقل باید سه کاراکتر باشه');
      if (email.trim().length < 8 || !email.includes('@')) return toast.error('لطفا ایمیل رو به درستی وارد کنید')
      if (bio.trim().length < 16) return toast.error('بیوگرافی شما حداقل باید 16 کاراکتر باشه')

      const res = await changeInfos(fullname, email, bio);
      if (!res.state) return toast.error(res.message);
      toast.success(res.message);
      router.refresh();
    } catch (error) {
      throw new Error('خطای ناشناخته')
    }
  }

  return (
    <div>
      <div className='h-12 bg-blue rounded-xl flex-center'>
        <p className='text-gray-300 text-sm'>شما از تاریخ {user.createdAt?.toLocaleDateString('fa-IR')} و ساعت  {user.createdAt?.toLocaleTimeString('fa-IR')} کنار مایی :))</p>
      </div>
      <div className="flex-center mt-6 gap-x-3 mx-4">
        <span className='flex-1 h-px bg-gray-800'></span>
        <p className="text-sm text-gray-300">ویرایش اطلاعات حساب من</p>
        <span className='flex-1 h-px bg-gray-800'></span>
      </div>
      <form className="mt-6" onSubmit={handleSubmitForm}>
        <div className='grid grid-cols-3 gap-1'>
          <div className='h-12 bg-gray-900 rounded-xl border border-gray-800'>
            <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" className='h-full w-full text-sm bg-gray-900 outline-none border-none text-gray-200 px-2 rounded-xl' placeholder='نام کامل شما' />
          </div>
          <div className='h-12 bg-gray-900 rounded-xl border border-gray-800'>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='h-full w-full text-sm bg-gray-900 outline-none border-none text-gray-200 px-2 rounded-xl' placeholder='ایمیل شما' />
          </div>
          <div className='h-12 bg-gray-900 rounded-xl border border-gray-800'>
            <input disabled={true} value={phone} type="text" className='h-full w-full text-sm bg-gray-900 outline-none border-none text-gray-200 px-2 rounded-xl cursor-not-allowed' placeholder='شماره همراه شما' />
          </div>
        </div>
        <div className='w-full mt-1 rounded-2xl border bg-gray-900 border-gray-800'>
          <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder='بیوگرافی شما' className=' bg-gray-900 border-gray-100 rounded-2xl p-3 border-none outline-none text-gray-200 text-sm min-h-32 max-h-40 w-full'></textarea>
        </div>
        <input type="submit" className='h-12 w-full bg-blue mt-1 rounded-xl text-green-500 cursor-pointer' value='ثبت تغییــرات' />
      </form>
    </div>
  )
}

export default UserInfoSection