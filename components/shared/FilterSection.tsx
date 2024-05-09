'use client'

import { filters } from "@/constants/filters";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";


interface FilterSectionProps {
    productCount?: number,
    isShowSearch?: boolean,
}

const FilterSection = ({ productCount, isShowSearch = true }: FilterSectionProps) => {


    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || ''
    const filterParam = searchParams.get('filter') || '';

    const [filter, setFilter] = useState(filterParam);
    const [search, setSearch] = useState(searchQuery);

    useEffect(() => {
        const timmer = setTimeout(() => {

            const url = urlCreator([
                { name: 'q', value: search },
                { name: 'filter', value: filter },
            ]);
            console.log(url);
            router.replace(`${pathName}/${url}`, { scroll: false });
        }, 600)
        return () => clearTimeout(timmer);
    }, [search, searchParams, pathName, searchQuery, filter, filterParam])

    const handleClearInput = () => {
        setSearch('');
    }

    return (
        <div className="">
            {isShowSearch && (
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
            )}
            <div className="h-14 bg-blue rounded-xl flex items-center mt-2 px-4">
                <div className="w-32 flex gap-x-1 items-center">
                    <span className="text-gray-300">تعداد</span>
                    <span className="font-dana-bold text-gray-300">{productCount}</span>
                    <span className="text-gray-300">محصول</span>
                </div>
                <div className="flex justify-center flex-1 gap-x-2">
                    {filters.map(fil => (
                        <button key={fil.id} onClick={() => setFilter(prev => prev === fil.value ? '' : fil.value)} className={`${(filter === fil.value) ? 'text-amber-500' : 'text-gray-400'} bg-gray-800/50 w-24 py-1 rounded-xl`}>{fil.title}</button>
                    ))}
                </div>
                <div className="w-32"></div>
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
    console.log(result);
    return result
}

export default FilterSection
