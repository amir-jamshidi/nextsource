import { IComment } from '@/types/comment'
import { IUser } from '@/types/user'
import Image from 'next/image'
interface CommentAnswerContentProps {
    answerUser: IUser,
    comment: IComment
}

const CommentAnswerContent = ({ answerUser, comment }: CommentAnswerContentProps) => {

    return (
        <div className='bg-comment px-2 py-3 mx-2 mt-3 mb-1 rounded-xl'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-24 w-full border-b mb-2 pb-2 md:mb-0 md:pb-0 md:border-b-0 md:border-l border-gray-300 dark:border-gray-700/40 ml-2 flex flex-col items-center'>
                    <div className='w-10 h-10 relative'>
                        <Image className='rounded-full' style={{ objectFit: 'cover' }} src={answerUser.profile} fill={true} alt='' />
                    </div>
                    <div className='flex flex-row md:flex-col items-center mt-1 bg-gray-100 dark:bg-transparent md:bg-transparent rounded-xl px-2 py-1'>
                        <p className='text-xs md:text-sm text-600-400 line-clamp-1 text-center'>{answerUser.fullname}</p>
                        <p className='text-xs md:text-sm text-green-500 border-r border-r-gray-200 dark:border-r-gray-700 pr-1 mr-1 md:mt-0 md:pr-0 md:border-none'>{answerUser.role === 'ADMIN' ? 'مدیریت' : answerUser.role == 'SELLER' ? 'فروشنده' : 'کاربر'}</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='text-600-400 text-sm text-justify '>{comment.answerContent}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentAnswerContent