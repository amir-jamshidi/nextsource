'use client'

import { userPanelFilter } from "@/constants/userPanelFilter"
import { urlCreator } from "@/libs/UrlCreator"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface UserPanelFilterSectionProps {
    productsCount?: number,
    filters: { id: number, title: string, href: string }[],
    title: string,
    children?: React.ReactNode
}

const UserPanelFilterSection = ({ productsCount, filters, title = "سورس", children }: UserPanelFilterSectionProps) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const [filter, setFilter] = useState(() => searchParams.get('filter') || '');

    useEffect(() => {
        const newUrl = urlCreator({
            params: searchParams.toString(),
            key: 'filter',
            value: filter ? filter : null
        })
        router.replace(newUrl, { scroll: false });
    }, [filter])
 


    
    return (
        <div className="flex bg-blue-light h-12 rounded-xl mb-4 ">
            <div className="w-32 flex justify-start items-center gap-x-1 pr-4">
                {productsCount && (
                    <>
                        <p className="font-dana-bold text-gray-300 text-sm">{productsCount}</p>
                        <p className="text-gray-300 text-sm">{title}</p>
                    </>
                )}
            </div>
            <div className='flex-1 flex-center gap-x-1'>
                {filters.map(fil => (
                    <p onClick={() => setFilter(prev => prev === fil.href ? '' : fil.href)} className={`${filter === fil.href ? 'text-amber-500' : 'text-gray-300'} text-sm w-20 bg-blue-light text-center py-1 rounded-xl cursor-pointer`}>{fil.title}</p>
                ))}
            </div>
            <div className="w-32">
                {children}
            </div>
        </div>
    )
}

export default UserPanelFilterSection