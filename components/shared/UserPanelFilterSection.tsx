'use client'

import { userPanelFilter } from "@/constants/userPanelFilter"
import { urlCreator } from "@/libs/UrlCreator"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const UserPanelFilterSection = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [filter, setFilter] = useState('');

    useEffect(() => {
        const newUrl = urlCreator({
            params: searchParams.toString(),
            key: 'filter',
            value: filter ? filter : null
        })
        router.replace(newUrl, { scroll: false });
    }, [filter])

    return (
        <div className='bg-blue-light h-12 rounded-xl mb-4 flex-center gap-x-1'>
            {userPanelFilter.map(filter => (
                <p onClick={() => setFilter(prev => prev === filter.href ? '' : filter.href)} className={`text-sm text-gray-300 w-20 bg-gray-800/40 text-center py-1 rounded-xl cursor-pointer`}>{filter.title}</p>
            ))}
        </div>
    )
}

export default UserPanelFilterSection