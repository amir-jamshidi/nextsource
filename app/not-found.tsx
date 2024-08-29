import notFoundImg from '@/public/assets/not-found.svg'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'صفحه پیدا نشد 404'
}

const NotFound = () => {
    return (
        <div className='h-screen flex-center'>
            <div className='flex-center flex-col gap-y-6 pb-10'>
                <div className='flex flex-col justify-center - items-center gap-y-4'>
                    <Image alt="Not Found" height={200} width={200} src={notFoundImg} />
                </div>
                <h2 className='text-800-200 text-xl'>صفحه مورد نظر پیدا نشد</h2>
                <a href={'/'}>
                    <p className='text-amber-600 dark:text-amber-500'>بازگشت</p>
                </a>
            </div>
        </div>
    )
}
export default NotFound