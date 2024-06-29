'use client'

import { useRouter } from "next/navigation"

const CommentMoreButton = ({ commentPage, params, commentRate }: { commentPage: number, params: string, commentRate: number }) => {

    const router = useRouter();

    const handlePagination = () => {
        router.push(`/product/${params}?comments=${commentPage + 1}`, { scroll: false })
    }

    return (
        <>
            {(commentPage * 5) >= commentRate ? null :
                <button onClick={handlePagination} className="bg-blue rounded-full px-3 py-2 text-gray-300 mt-5">مشاهده بیشتر</button>
            }
        </>
    )
}

export default CommentMoreButton