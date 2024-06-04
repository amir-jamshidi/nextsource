'use client'

import { PRODUCTS_LIMIT } from "@/constants/productsLimitCount";
import { urlCreator } from "@/libs/UrlCreator";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

interface ShowMoreButtonProps {
    productCount: number
}

const ShowMoreButton = ({ productCount }: ShowMoreButtonProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pageParam = Number(searchParams.get('page')) || null;
    const [page, setPage] = useState(pageParam)

    useEffect(() => {
        const newUrl = urlCreator({
            params: searchParams.toString(),
            key: 'page',
            value: page ? String(page) : null
        });
        router.push(newUrl, { scroll: false });
    }, [page, router, searchParams])

    useEffect(() => { setPage(pageParam) }, [pageParam])

    const handlePageNavigate = () => {
        setPage(prev => prev ? prev + 1 : 2);
    }

    const pageP = pageParam ? Number(pageParam) : 1

    return (
        <>
            {(pageP * PRODUCTS_LIMIT) < productCount && (
                <div className="flex justify-center mt-6">
                    <button onClick={handlePageNavigate} className="text-sm bg-blue rounded-full px-5 py-2.5 text-gray-300 mt-5">مشاهده بیشتر</button>
                </div> 
            )}
        </>
    )
}

export default ShowMoreButton