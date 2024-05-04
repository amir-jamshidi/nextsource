import { getComments } from '@/actions/comment.action'
import CommentItem from '@/components/shared/CommentItem'
import { IComment } from '@/types/comment'
import { StarRounded } from '@mui/icons-material'
import React from 'react'


interface ProductCommentsSectionProps {
    comment: string,
    productID: string,
    children: React.ReactNode,
    commnetsCount: number,
    rate: number
}

const ProductCommentsSection = async ({ comment, productID, commnetsCount, children, rate }: ProductCommentsSectionProps) => {

    const comments = await getComments(Number(comment), productID) as IComment[]

    return (
        <section className='bg-blue px-6 py-6 rounded-xl mt-8'>
            <div className="flex-center flex">
                <div className=' flex text-sm items-center gap-x-1 w-32'>
                    {commnetsCount > 0 ? (<><p className='text-gray-400'>تا الان</p>
                        <span className='text-amber-500 font-dana-bold pt-0.5'>{commnetsCount}</span>
                        <p className='text-gray-400'>نظر ثبت شده</p></>) :
                        (
                            <>
                                <p className='text-gray-400'>تا الان نظری ثبت نشده</p>
                            </>
                        )}

                </div>
                <span className="flex-1 h-px bg-gray-800 inline-block"></span>
                <p className="text-gray-300 text-sm">نظرات</p>
                <span className="flex-1 h-px bg-gray-800 inline-block"></span>
                <div className=' flex text-sm items-center gap-x-1 w-32 justify-end'>
                    {commnetsCount > 0 ? (<>
                        <p className='text-gray-400'>امتیاز کاربران : </p>
                        <div className='flex items-center'>
                            <span className='text-amber-500 font-dana-bold pt-0.5'>{Number(rate / commnetsCount).toFixed(1)}</span>
                            <StarRounded className='text-amber-500' fontSize='small' />
                        </div>
                    </>) : (
                        <p className='text-gray-400'>تا الان امتیازی ثبت نشده</p>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-y-1 mt-6'>
                {comments.length > 0 ? (
                    <>
                        {comments.map(comment => (
                            <CommentItem key={comment._id} comment={comment} />
                        ))}
                    </>
                ) : (
                    <div className='flex-center w-full'>
                        <p className='text-gray-500 py-6'>نظری نیست !!!</p>
                    </div>
                )}
            </div>
            <div className='flex-center'>
                {children}
            </div>
        </section>
    )
}

export default ProductCommentsSection