import Link from 'next/link'
import React from 'react'

interface AddSectionUserPanelProps {
    href: string,
    title: string
}

const AddSectionUserPanel = ({ href, title }: AddSectionUserPanelProps) => {
    return (
        <div className='flex justify-end items-center h-full pl-4'>
            <Link href={`${href}`} className="flex items-center text-gray-100 bg-green-500/60 rounded-xl py-1.5  px-1.5 md:px-3">
                <span className='md:text-sm text-xs'>{title}</span>
            </Link>
        </div>
    )
}

export default AddSectionUserPanel