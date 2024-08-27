import React from 'react'

interface NoTransActionProps {
    text: string,
    extranClass?: string
}

const NoTransAction = ({ text, extranClass = '' }: NoTransActionProps) => {
    return (
        <div className={`bg-white dark:bg-gray-900 py-8 rounded-2xl flex-center ${extranClass}`}>
            <p className="text-sm text-600-400">{text}</p>
        </div>
    )
}

export default NoTransAction