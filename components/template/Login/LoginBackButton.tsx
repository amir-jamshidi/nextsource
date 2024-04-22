import Link from 'next/link'

const LoginBackButton = () => {
    return (
        <Link href={'/'}>
            <div className='w-72 py-3 px-4 rounded-full bg-blue mt-5 transition-all flex items-center justify-center'>
                <p className='text-white text-sm'>بازگشت به صفحه اصلی</p>
            </div>
        </Link>
    )
}

export default LoginBackButton