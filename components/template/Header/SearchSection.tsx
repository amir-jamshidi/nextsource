'use client'

import { SearchRounded } from "@mui/icons-material"
import { useRouter } from "next/navigation";
import React, { useState } from "react"

const SearchSection = () => {

    const [search, setSearch] = useState('');

    const router = useRouter();

    const handleSearch = () => {
        if (!search.trim()) return false
        router.push(`/search?q=${search}`);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        router.push(`/search?q=${search}`);
    }

    return (
        <div className='bg-input-container rounded-xl w-full flex items-center px-2 gap-x-1.5 cursor-pointer'>
            <span onClick={handleSearch}>
                <SearchRounded className='text-gray-600 dark:text-gray-400' />
            </span>
            <input onKeyDown={handleKeyDown} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='bg-input w-full rounded-lg py-2 border-none outline-none text-gray-300 text-sm h-10' placeholder='دنبال چی میگردی ؟ برام بنویس ...' />
        </div>
    )
}

export default SearchSection