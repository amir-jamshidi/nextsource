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
        router.push(newUrl, { scroll: false })
    }, [filter, filterParam])


    if (productCount <= 0) return null

    return (
        <div className={`h-14 bg-blue rounded-xl flex items-center px-4 ${margin ? 'mt-8' : 'mt-2'}`}>
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
    )
}



export default FilterSection
