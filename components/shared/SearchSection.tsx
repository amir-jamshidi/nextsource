'use client'
import { urlCreator } from '@/libs/UrlCreator';
import { CloseRounded, SearchRounded } from '@mui/icons-material'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchSection = () => {


    const searchParams = useSearchParams();
    const router = useRouter();

    const searchQuery = searchParams.get('q') || ''
    const [search, setSearch] = useState(searchQuery);


    useEffect(() => {
        const timer = setTimeout(() => {
            const newUrl = urlCreator({
                params: searchParams.toString(),
                key: 'q',
                value: search ? search : null
            })
            router.push(newUrl, { scroll: false });
        }, 600);
        return () => clearTimeout(timer);
    }, [search, searchQuery])


    const handleClearInput = () => {
        setSearch('');
    }

    return (
        <div className="h-20 bg-blue rounded-xl mt-14 flex-center">
            <div className="bg-gray-800/50 rounded-xl w-2/3 flex items-center">
                <span className="w-10 flex-center">
                    <SearchRounded className="text-gray-400" />
                </span>
                <input className="py-3 text-gray-300 rounded-xl bg-transparent border-none outline-none flex-1 pl-2.5" placeholder="دنبال چی هستی ؟ برام بنویس" onChange={(e) => setSearch(e.target.value)} value={search}></input>
                <span className="w-10 flex-center cursor-pointer" onClick={handleClearInput}>
                    <CloseRounded className="text-gray-400" />
                </span>
            </div>
        </div>
    )
}

export default SearchSection