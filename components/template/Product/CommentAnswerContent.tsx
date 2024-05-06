import { IComment } from '@/types/comment'
import { IUser } from '@/types/user'
import Image from 'next/image'
interface CommentAnswerContentProps {
    answerUser: IUser,
    comment: IComment
}

const CommentAnswerContent = ({ answerUser, comment }: CommentAnswerContentProps) => {

    return (
        <div className='bg-blue px-2 py-3 mx-2 mt-3 mb-1 rounded-xl'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-24 w-full border-b mb-2 pb-2 md:mb-0 md:pb-0 md:border-b-0 md:border-l border-gray-700/40 ml-2 flex flex-col items-center'>
                    <div className='w-8 h-8 relative'>
                        <Image className='rounded-full' style={{ objectFit: 'cover' }} src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} fill={true} alt='' />
                    </div>
                    <div className='flex flex-col items-center mt-0.5'>
                        <p className='text-sm text-gray-400 line-clamp-1 text-center'>{answerUser.fullname}</p>
                        <p className='text-sm text-green-500'>{answerUser.role === 'ADMIN' ? 'مدیریت' : answerUser.role == 'SELLER' ? 'فروشنده' : 'کاربر'}</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='text-gray-400 text-sm text-justify '>{comment.answerContent}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentAnswerContent