import { getComments } from '@/actions/comment.action'
import CommentItem from '@/components/shared/CommentItem'
import ProductSectionTitle from '@/components/shared/ProductSectionTitle'
import { IComment } from '@/types/comment'
import React from 'react'

const ProductCommentsSection = async () => {
    const comments = await getComments(10, '') as IComment[]

    return (
        <section className='bg-blue px-6 py-6 rounded-xl mt-8'>
            <ProductSectionTitle title='نظرات' />
            <div className='flex flex-col gap-y-1 mt-6'>
                {comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} />
                ))}
            </div>
        </section>
    )
}

export default ProductCommentsSection