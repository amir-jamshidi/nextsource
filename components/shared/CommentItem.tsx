import { IComment } from '@/types/comment'
import { IUser } from '@/types/user'
import { StarRounded } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import CommentAnswerContent from '../template/Product/CommentAnswerContent'

const CommentItem = ({ comment }: { comment: IComment }) => {

    const user = comment.userID as IUser;
    const answerUser = comment.answerUserID as IUser;

    return (
        <div className='py-3 bg-gray-800/30 rounded-xl flex'>
            <div className='w-24 border-l border-l-gray-800 ml-2 flex flex-col items-center'>
                <div className='w-12 h-12 relative'>
                    <Image className='rounded-full' style={{ objectFit: 'cover' }} src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} fill={true} alt='' />
                </div>
                <div>
                    <p className='text-sm text-gray-400 line-clamp-1 text-center'>{user.fullname}</p>
                    <div className='flex'>
                        {Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
                            <>
                                {comment.rate >= i ? (<StarRounded sx={{ fontSize: 16 }} className='text-amber-500' />) : (<StarRounded sx={{ fontSize: 16 }} className='text-gray-700' />)}
                            </>
                        ))}
                    </div>
                    <p className='text-sm text-center text-gray-400'>{comment.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
            </div>
            <div className='flex-1 pl-2'>
                <p className='text-gray-300 text-justify'>
                    {comment.body}
                </p>
                {comment.isAnswer && (
                    <CommentAnswerContent comment={comment} answerUser={answerUser} />
                )}
            </div>
        </div>
    )
}

export default CommentItem