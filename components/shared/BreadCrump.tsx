import { ArrowLeftRounded } from '@mui/icons-material'
import Link from 'next/link'

interface BreadCrumpProps {
    addresses?: { title: string, href: string }[]
}

const BreadCrump = ({ addresses }: BreadCrumpProps) => {

    return (
        <div className='flex gap-x-0.5 mt-6 lg:mt-14 items-center text-sm rounded-xl px-4 bg-blue py-3 justify-center border-section'>
            <Link href={'/'} className='bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded-xl border border-gray-200 dark:border-gray-800'>
                <p className='text-600-400 text line-clamp-1'>صفحه اصلی</p>
            </Link>
            {addresses?.map(address => (
                <div key={address.title} className='flex items-center gap-x-0.5'>
                    <span className='py-0.5 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800'>
                        <ArrowLeftRounded className='dark:text-gray-400 text-gray-500' />
                    </span>
                    <Link href={address.href}>
                        <p className='text-600-400  bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1 border border-gray-200 dark:border-gray-800 line-clamp-1'>{address.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BreadCrump