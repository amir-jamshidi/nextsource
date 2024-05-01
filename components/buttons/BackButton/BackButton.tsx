'use client'
import { ArrowBackIosRounded } from '@mui/icons-material';
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {

    const router = useRouter();

    return (
        <button onClick={() => router.back()} className=' top-1 left-1 absolute w-10 h-10 rounded-full bg-blue text-gray-300'>
            <ArrowBackIosRounded fontSize='small' className='' />
        </button >
    )
}

export default BackButton