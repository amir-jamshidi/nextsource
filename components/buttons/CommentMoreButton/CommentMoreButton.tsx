'use client'

import { useRouter } from "next/navigation"

const CommentMoreButton = ({ commentPage, params, commentsCount }: { commentPage: number, params: string, commentsCount: number }) => {

    const router = useRouter();

    const handlePagination = () => {
        router.push(`/product/${params}?comments=${commentPage + 1}`, { scroll: false })
    }

    return (
        <>
            {(commentPage * 5) >= commentsCount ? null :
                <button onClick={handlePagination} className="bg-btns rounded-full px-3 py-2 dark:text-gray-300 text-gray-100 mt-5">مشاهده بیشتر</button>
            }
        </>
    )
}

export default CommentMoreButton