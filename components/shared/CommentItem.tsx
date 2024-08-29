import { IComment } from '@/types/comment'
import { IUser } from '@/types/user'
import { StarRounded } from '@mui/icons-material'
import Image from 'next/image'
import CommentAnswerContent from '@/components/template/Product/CommentAnswerContent'

const CommentItem = ({ comment }: { comment: IComment }) => {

    const user = comment.userID as IUser;
    const answerUser = comment.answerUserID as IUser;

    return (
        <div className='py-3 bg-gray-100 dark:bg-gray-800/30 rounded-xl flex text-sm md:text-base'>
            <div className='gap-2 border-l border-l-gray-200 dark:border-l-gray-800 ml-2 flex flex-col md:flex-row items-center px-2'>
                <div className='w-12 h-12 relative'>
                    <Image className='rounded-full' style={{ objectFit: 'cover' }} src={user.profile} fill={true} alt='' />
                </div>
                <div>
                    <p className='text-sm text-600-400 line-clamp-1 text-center'>{user.fullname}</p>
                    <div className='flex justify-center'>
                        {Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
                            <>
                                {comment.rate >= i ? (<StarRounded key={i} sx={{ fontSize: 16 }} className='text-amber-500' />) : (<StarRounded key={i} sx={{ fontSize: 16 }} className='text-gray-300 dark:text-gray-700' />)}
                            </>
                        ))}
                    </div>
                    <p className='text-sm text-center text-600-400'>{comment.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
            </div>
            <div className='flex-1 pl-2'>
                <p className='text-700-300'>
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