import { ArrowLeftRounded } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

interface SectionTitleProps {
    title: string,
    isShowMore?: boolean,
    href?: string
}

const SctionTitle = ({ title, isShowMore = true, href }: SectionTitleProps) => {
    return (
        <div className="flex items-center relative">
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>
            <p className="text-700-300 px-4 text-sm">{title}</p>
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>

            {isShowMore && (
                <div className='absolute left-0'>
                    <Link href={`${href}`} className='p-3 rounded-full inline-block bg-blue'>
                        <ArrowLeftRounded className='text-gray-200' />
                    </Link>
                </div>)}
        </div>
    )
}

export default SctionTitle