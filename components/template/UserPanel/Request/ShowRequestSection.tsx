import BackButton from '@/components/buttons/BackButton/BackButton'
import { IRequest } from '@/types/request'

interface ShowRequestSectionProps {
    request: IRequest
}

const ShowRequestSection = ({ request }: ShowRequestSectionProps) => {
    return (
        <>
            <div className='h-12 bg-blue-light rounded-2xl flex items-center px-4 relative'>
                <div className='flex text-700-300 gap-x-1 text-sm items-center'>
                    <p>تاریخ ایجاد : </p>
                    <p className='font-dana-bold -mb-0.5'>{request.createdAt?.toLocaleDateString('fa-IR')}</p>
                </div>
                <div className='flex text-700-300 gap-x-1 text-sm px-2 border-r md:border-x border-x-gray-200 dark:border-x-gray-700 mx-2'>
                    <p>وضعیت درخواست : </p>
                    <p className={`${request.isAnswer ? 'text-green-500' : 'text-amber-500'}`}>{request.isAnswer ? 'پاسخ داده شد' : 'بدون پاسخ'}</p>
                </div>
                <div className='hidden md:flex text-700-300 gap-x-1 text-sm items-center'>
                    <p>شناسه درخواست : </p>
                    <p className='font-dana-bold -mb-0.5'>{request.code}</p>
                </div>

                <BackButton bg={false} />
            </div>

            <div className='flex md:hidden h-12 bg-blue-light rounded-2xl mt-2 px-4'>
                <div className='flex text-700-300 gap-x-1 text-sm items-center'>
                    <p>شناسه درخواست : </p>
                    <p className='font-dana-bold -mb-0.5'>{request.code}</p>
                </div>
            </div>

            <div className='mt-2 bg-blue-light p-4 rounded-2xl'>
                <div className='flex gap-x-2'>
                    <span className='flex-center shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800/60 text-sm text-gray-400 border dark:border-gray-700'>شما</span>
                    <div className='flex-1 bg-white border-section dark:bg-gray-800/60 rounded-2xl px-4 py-3'>
                        <p className='text-700-300 text-sm text-justify'>
                            {request.caption}
                        </p>
                    </div>
                </div>
                {request.answerContent && (
                    <>
                        <div className='flex items-center gap-x-3  my-5'>
                            <span className='h-px bg-gray-200 dark:bg-gray-800 flex flex-1'></span>
                            <p className="text-sm text-600-400">پاسخ مدیر</p>
                            <span className='h-px bg-gray-200 dark:bg-gray-800 flex flex-1'></span>

                        </div>
                        <div className='flex flex-row-reverse gap-x-2'>
                            <span className='flex-center shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800/60 text-sm text-gray-400 border border-green-500 dark:border-green-700'>پاسخ</span>
                            <div className='flex-1 bg-white border-section dark:bg-gray-800/60 rounded-2xl px-4 py-3'>
                                <p className='text-700-300 text-sm text-justify'>
                                    {request.answerContent}
                                </p>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default ShowRequestSection