import { ArrowLeftRounded } from '@mui/icons-material'
import React from 'react'

interface SectionTitleProps {
    title: string,
    isShowMore?: boolean
}

const SctionTitle = ({ title, isShowMore = true }: SectionTitleProps) => {
    return (
        <div className="flex items-center relative">
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>
            <p className="text-700-300 px-4 text-sm">{title}</p>
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>

            {isShowMore && (
                <div className='absolute left-0'>
                    <span className='p-3 rounded-full inline-block bg-blue'>
                        <ArrowLeftRounded className='text-gray-200' />
                    </span>
                </div>)}
        </div>
    )
}

export default SctionTitle