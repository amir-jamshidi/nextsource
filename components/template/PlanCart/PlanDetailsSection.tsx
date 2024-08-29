import { IPlan } from '@/types/plan'
import { EmojiEventsRounded } from '@mui/icons-material'
import React from 'react'
import PlanBuyButtons from './PlanBuyButtons'
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation'
import isHavPlan from '@/middlewares/isHavPlan'

interface PlanDetailsSectionProps {
    planDetails: IPlan
}

const PlanDetailsSection = async ({ planDetails }: PlanDetailsSectionProps) => {

    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    const isHavPlanUser = await isHavPlan();

    return (
        <div className='w-96'>
            <div className={`${planDetails.color === 'GOLD' ? 'dark:bg-amber-500/70 bg-amber-500' : planDetails.color === "SILVER" ? 'dark:bg-neutral-400/70 bg-neutral-400/90' : 'dark:bg-orange-600/70 bg-orange-600/90'} rounded-2xl py-4 relative`}>
                <div className='plan-background absolute inset-0 -z-10'></div>
                <div className='flex flex-col items-center px-4'>
                    <span className='-mt-[70px]'>
                        <EmojiEventsRounded className={`${planDetails.color === 'GOLD' ? 'dark:text-amber-500 text-amber-400' : planDetails.color === "SILVER" ? 'dark:text-neutral-400 text-neutral-300' : 'dark:text-orange-600 text-orange-500'}`} sx={{ width: 150, height: 150 }} />
                    </span>
                    <div className='flex flex-col justify-center gap-y-2 items-center gap-x-1'>
                        <h1 className='text-xl font-morabba-bold text-white dark:text-gray-200 mt-1'>{planDetails.title}</h1>
                    </div>
                </div>
                <div className='px-4 mt-4'>
                    <p className=' text-justify text-white dark:text-gray-300 text-sm'>
                        {planDetails.caption}
                    </p>
                </div>

                <div className='flex justify-between items-center px-4 text-white dark:text-gray-200 mt-6'>
                    <p>مبلغ کل</p>
                    <div className="flex items-center gap-x-1 text-white dark:text-gray-200">
                        <p className='font-dana-bold'>{planDetails.price.toLocaleString()}</p>
                        <p className='text-sm'>تومان</p>
                    </div>
                </div>
            </div>
            <PlanBuyButtons planColor={planDetails.color} isHavPlan={isHavPlanUser} planID={JSON.parse(JSON.stringify(planDetails._id))} money={isLoginUser.money} />
        </div>

    )
}

export default PlanDetailsSection