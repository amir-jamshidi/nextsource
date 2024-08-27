'use client'

import { filters } from "@/constants/filters";
import { urlCreator } from "@/libs/UrlCreator";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

interface FilterSectionProps {
    productCount: number,
    margin?: boolean
}


const FilterSection = ({ productCount, margin = true }: FilterSectionProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const filterParam = searchParams.get('filter') || ''
    const [filter, setFilter] = useState(filterParam);


    useEffect(() => {
        const newUrl = urlCreator({
            params: searchParams.toString(),
            key: 'filter',
            value: filter ? filter : null
        })
        router.replace(newUrl, { scroll: false })
    }, [filter, filterParam, router, searchParams])


    if (productCount <= 0) return null

    return (
        <div className={`h-12 bg-blue rounded-xl flex items-center px-2 md:px-4 ${margin ? 'mt-8' : 'mt-2'}`}>
            <div className="hidden md:flex w-32 text-sm gap-x-1 items-center">
                <span className="text-gray-300">تعداد</span>
                <span className="font-dana-bold text-gray-300">{productCount}</span>
                <span className="text-gray-300">محصول</span>
            </div>
            <div className="flex justify-center flex-1 gap-x-0.5 sm:gap-1 md:gap-x-2">
                {filters.map(fil => (
                    <button key={fil.id} onClick={() => setFilter(prev => prev === fil.value ? '' : fil.value)} className={`${(filter === fil.value) ? 'text-amber-500' : 'dark:text-gray-400 text-gray-600'} border border-transparent dark:border-gray-700/30 text-xs sm:text-sm bg-blue-light w-[70px] md:w-24 py-1.5 md:py-1 rounded-xl`}>{fil.title}</button>
                ))}
            </div>
            <div className="hidden md:flex w-32"></div>
        </div>
    )
}



export default FilterSection
