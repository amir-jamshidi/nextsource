import { ArrowLeftRounded } from '@mui/icons-material'
import React from 'react'

interface BreadCrumpProps {
    addresses?: []
}

const BreadCrump = ({ addresses }: BreadCrumpProps) => {
    return (
        <div className='flex mt-6 lg:mt-14 items-center text-sm'>
            <p className='text-gray-300'>صفحه اصلی</p>
            <ArrowLeftRounded className='text-gray-400' />
            <p className='text-gray-300'>ری اکت</p>
            <ArrowLeftRounded className='text-gray-400' />
            <p className='text-gray-300'>نکست سورس</p>
        </div>
    )
}

export default BreadCrump