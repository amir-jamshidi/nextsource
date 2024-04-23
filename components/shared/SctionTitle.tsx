import React from 'react'

interface SectionTitleProps {
    title: string
}

const SctionTitle = ({ title }: SectionTitleProps) => {
    return (
        <div className="flex items-center">
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>
            <p className="text-700-300 px-4 text-sm">{title}</p>
            <span className="flex-1 h-px bg-gray-700/50 inline-block"></span>
        </div>
    )
}

export default SctionTitle