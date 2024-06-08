import { ArrowLeftRounded } from '@mui/icons-material'
import Link from 'next/link'

interface BreadCrumpProps {
    addresses?: { title: string, href: string }[]
}

const BreadCrump = ({ addresses }: BreadCrumpProps) => {

    return (
        <div className='flex gap-x-0.5 mt-6 lg:mt-14 items-center text-sm rounded-xl px-4 bg-blue py-3 justify-center'>
            <Link href={'/'} className='bg-gray-900 px-2 py-1 rounded-xl border border-gray-800'>
                <p className='text-gray-300 text'>صفحه اصلی</p>
            </Link>
            {addresses?.map(address => (
                <div key={address.title} className='flex items-center gap-x-0.5'>
                    <span className='py-0.5 bg-gray-900 rounded-xl border border-gray-800'>
                        <ArrowLeftRounded className='text-gray-400' />
                    </span>
                    <Link href={address.href}>
                        <p className='text-gray-300 bg-gray-900 rounded-xl px-2 py-1 border border-gray-800'>{address.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BreadCrump