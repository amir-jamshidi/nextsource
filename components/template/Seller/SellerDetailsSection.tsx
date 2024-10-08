import { ISeller } from '@/types/seller';
import Image from 'next/image';
import { IUser } from '@/types/user';

interface SellerDetailsSectionProps {
    seller: ISeller
}

const SellerDetailsSection = ({ seller }: SellerDetailsSectionProps) => {

    const user = seller.userID as IUser

    return (
        <div>
            <div className='bg-blue border-section pb-4 px-2 rounded-xl flex flex-col items-center flex-1 lg:w-80'>
                <div className='h-56 w-full relative shrink-0'>
                    <Image src={user.profile} className="rounded-2xl -mt-6" fill={true} style={{ objectFit: 'cover' }} alt="" />
                </div>
                <div className='flex flex-col gap-y-1 items-center px-2 -mt-2'>
                    <h3 className='text-800-200'>{user.fullname}</h3>
                    <h3 className='text-700-300 text-sm'>{user.bio}</h3>
                </div>
                <div className='w-full grid grid-cols-2 gap-1 mt-4 px-1'>
                    {user.technologies.map((tec, i) => (
                        <p className='bg-blue-light px-3 font-morabba-light py-2 rounded-lg text-700-300 text-sm text-center' key={i}>{tec}</p>
                    ))}
                </div>
                <div className='w-full px-1.5'>
                    <div className='w-full mt-4  flex  items-center justify-around bg-blue-light py-2.5 rounded-xl'>
                        <div className=' border-l border-l-gray-200 dark:border-l-gray-700 flex w-full  justify-center gap-x-1 px-2'>
                            <p className='font-dana-bold text-amber-500'>{seller.score}</p>
                            <p className='text-amber-500'>امتیاز</p>
                        </div>
                        <div className=' flex w-full  justify-center gap-x-1 px-2'>
                            <p className='text-green-500'>
                                {user.role === 'ADMIN' && 'مدیر سایت'}
                                {user.role === 'SELLER' && 'فروشنده'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDetailsSection
