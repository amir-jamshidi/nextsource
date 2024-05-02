import { ArrowLeftRounded } from '@mui/icons-material'
import React from 'react'

interface BreadCrumpProps {
    addresses?: { title: string, href: string }[]
}

const BreadCrump = ({ addresses }: BreadCrumpProps) => {

    return (
        <div className='flex mt-6 lg:mt-14 items-center text-sm rounded-xl px-4 bg-blue py-3'>
            <p className='text-gray-300'>صفحه اصلی</p>
            {addresses?.map(address => (
                <>
                    <ArrowLeftRounded className='text-gray-400' />
                    <p className='text-gray-300'>{address.title}</p>
                </>
            ))}
        </div>
    )
}

export default BreadCrump