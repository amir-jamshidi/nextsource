'use client'

import { filters } from "@/constants/filters";
import { SearchRounded } from "@mui/icons-material";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

const SearchInput = ({ }) => {


    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get('q')
    const filterParam = searchParams.get('filter') || '';
    const [filter, setFilter] = useState(filterParam || '');
    const [value, setValue] = useState(query || '');

    useEffect(() => {
        const timmer = setTimeout(() => {
            const url = urlCreator([
                { name: 'q', value: value },
                { name: 'filter', value: filter },
            ]);
            router.push(url, { scroll: false });
        }, 600)
        return () => clearTimeout(timmer);
    }, [value, searchParams, path, query, filter, filterParam])


    return (
        <div className="">
            <div className="h-20 bg-blue rounded-xl mt-14 flex-center">
                <div className="bg-gray-800/50 rounded-xl w-2/3 flex items-center">
                    <input className="py-3 text-gray-300 rounded-xl bg-transparent border-none outline-none flex-1 px-2.5" placeholder="دنبال چی هستی ؟ برام بنویس" onChange={(e) => setValue(e.target.value)} value={value}></input>
                    <span className="w-10 flex-center">
                        <SearchRounded className="text-gray-400" />
                    </span>
                </div>
            </div>
            <div className="h-14 bg-blue rounded-xl flex-center gap-x-2 mt-2">
                {filters.map(fil => (
                    <button key={fil.id} onClick={() => setFilter(prev => prev === fil.value ? '' : fil.value)} className={`${(filter === fil.value) ? 'text-amber-500' : 'text-gray-400'} bg-gray-800/50 w-24 py-1 rounded-xl`}>{fil.title}</button>
                ))}
            </div>
        </div>
    )
}

const urlCreator = (values: { name: string, value: string }[]): string => {
    const result = values.reduce((str, val) => {
        if (val.value) {
            return `${str}${str.includes('?') ? '&' : '?'}${val.name}=${val.value}`
        }
        return str
    }, '');
    return result
}

export default SearchInput
