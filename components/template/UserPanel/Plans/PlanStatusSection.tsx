import { getPlanDetails } from '@/actions/orderPlan.action';
import React from 'react'

const PlanStatusSection = async () => {

    const isHavPlanUser = await getPlanDetails();

    return (
        <div className='h-12 bg-blue-light rounded-2xl mb-4 flex-center'>
            {!isHavPlanUser &&
                (
                    <div className="flex gap-x-4">
                        <div className='flex justify-between  items-end flex-col'>
                            <span className='w-8 md:w-16 rounded h-[3px] flex bg-red-500'></span>
                            <span className='w-16 md:w-24 rounded h-[3px] flex bg-red-500'></span>
                            <span className='w-8 md:w-16 rounded h-[3px] flex bg-red-500'></span>
                        </div>
                        <p className='text-red-500 text-sm '>شما هیچ پلن فعالی ندارید</p>
                        <div className='flex justify-between  items-start flex-col'>
                            <span className='w-8 md:w-16 rounded h-[3px] flex bg-red-500'></span>
                            <span className='w-16 md:w-20 rounded h-[3px] flex bg-red-500'></span>
                            <span className='w-8 md:w-16 rounded h-[3px] flex bg-red-500'></span>
                        </div>
                    </div>
                )
            }
            {isHavPlanUser &&
                <div className=' flex gap-x-4 '>
                    <div className='flex justify-between items-end flex-col'>
                        <span className='w-8 md:w-16 rounded h-[3px] flex bg-amber-500'></span>
                        <span className='w-16 md:w-20 rounded h-[3px] flex bg-amber-500'></span>
                        <span className='w-8 md:w-16 rounded h-[3px] flex bg-amber-500'></span>
                    </div>
                    <div className='flex gap-x-1 text-sm'>
                        <p className='text-amber-500'>شما تا تاریخ</p>
                        <p className='text-amber-500'>{new Date(isHavPlanUser.expireTime).toLocaleDateString('fa-IR')}</p>
                        <p className='text-amber-500'>پلن فعال دارید</p>
                    </div>
                    <div className='flex justify-between items-start flex-col'>
                        <span className='w-8 md:w-16 rounded h-[3px] flex bg-amber-500'></span>
                        <span className='w-16 md:w-20 rounded h-[3px] flex bg-amber-500'></span>
                        <span className='w-8 md:w-16 rounded h-[3px] flex bg-amber-500'></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default PlanStatusSection