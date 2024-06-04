'use client'

import { useThemeProvider } from "@/contexts/ThemeContextProvider";
import { SearchRounded } from "@mui/icons-material"
import { useRouter } from "next/navigation";
import React, { useState } from "react"

const NavigationSearchSection = () => {
    const [search, setSearch] = useState('');

    const router = useRouter();
    const theme = useThemeProvider();

    const handleChangeSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        router.replace(`/search?q=${search}`)
        theme?.handleSetIsOpenSidebar(false)
    }

    const handleSearch = () => {
        if (!search.trim()) return;
        router.replace(`/search?q=${search}`);
        theme?.handleSetIsOpenSidebar(false);
    }

    return (
        <div className="px-2 bg-gray-900 rounded-xl flex items-center gap-x-1.5">
            <span onClick={handleSearch} className="cursor-pointer">
                <SearchRounded className="text-gray-300 " />
            </span>
            <input value={search} onKeyDown={handleChangeSearch} onChange={(e) => setSearch(e.target.value)} type="text" className="py-2 w-full rounded-xl bg-gray-900 border-none outline-none text-gray-300" autoComplete="off" placeholder="دنبال چی میگردی ؟" />
        </div>
    )
}

export default NavigationSearchSection