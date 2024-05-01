'use client'

import { KeyboardArrowUpRounded } from '@mui/icons-material'
import React from 'react'

const ScrollToTop = () => {
    return (
        <button onClick={() => { window.scrollTo(0, 0) }} className="flex-center w-10 h-10 rounded-full bg-gray-700">
            <KeyboardArrowUpRounded className="text-gray-400" />
        </button>
    )
}

export default ScrollToTop