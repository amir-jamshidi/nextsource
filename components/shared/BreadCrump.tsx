import { ArrowLeftRounded } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

interface BreadCrumpProps {
    addresses?: { title: string, href: string }[]
}

const BreadCrump = ({ addresses }: BreadCrumpProps) => {

    return (
        <div className='flex mt-6 lg:mt-14 items-center text-sm rounded-xl px-4 bg-blue py-3'>
            <Link href={'/'}>
                <p className='text-gray-300 text'>صفحه اصلی</p>
            </Link>
            {addresses?.map(address => (
                <div key={address.title} className='flex items-center'>
                    <ArrowLeftRounded className='text-gray-400' />
                    <Link href={address.href}>
                        <p className='text-gray-300'>{address.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BreadCrump