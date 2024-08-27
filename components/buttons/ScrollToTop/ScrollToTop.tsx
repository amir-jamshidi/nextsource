'use client'

import { KeyboardArrowUpRounded } from '@mui/icons-material'
import React from 'react'

const ScrollToTop = () => {
    return (
        <button onClick={() => window.scrollTo(0, 0)} className="flex-center border border-gray-200 dark:border-none w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700">
            <KeyboardArrowUpRounded className="dark:text-gray-400 text-gray-500" />
        </button>
    )
}

export default ScrollToTop