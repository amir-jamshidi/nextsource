'use client'

import { userPanelFilter } from "@/constants/userPanelFilter"
import { urlCreator } from "@/libs/UrlCreator"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface UserPanelFilterSectionProps {
    productsCount: number
}

const UserPanelFilterSection = ({ productsCount }: UserPanelFilterSectionProps) => {

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
        <div className="flex bg-gray-800/40 h-12 rounded-xl mb-4 px-4">
            <div className="w-32 flex justify-start items-center gap-x-1">
                {productsCount && (
                    <>
                        <p className="font-dana-bold text-gray-300 text-sm">{productsCount}</p>
                        <p className="text-gray-300 text-sm">دوره</p>
                    </>
                )}
            </div>
            <div className='flex-1 flex-center gap-x-1'>
                {userPanelFilter.map(fil => (
                    <p onClick={() => setFilter(prev => prev === fil.href ? '' : fil.href)} className={`${filter === fil.href ? 'text-amber-500' : 'text-gray-300'} text-sm w-20 bg-blue-light text-center py-1 rounded-xl cursor-pointer`}>{fil.title}</p>
                ))}
            </div>
            <div className="w-32"></div>
        </div>
    )
}

export default UserPanelFilterSection