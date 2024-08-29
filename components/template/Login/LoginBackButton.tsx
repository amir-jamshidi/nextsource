import Link from 'next/link'

const LoginBackButton = () => {
    return (
        <Link href={'/'}>
            <div className='w-52 mb-12 py-4 px-4 rounded-full bg-blue border border-gray-200 dark:border-gray-800 mt-5 transition-all flex items-center justify-center'>
                <p className='text-gray-600 dark:text-white text-sm'>بازگشت به صفحه اصلی</p>
            </div>
        </Link>
    )
}

export default LoginBackButton