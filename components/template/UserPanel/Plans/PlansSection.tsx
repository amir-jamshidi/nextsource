import { getPlans } from '@/actions/plan.action';
import BuyPlanButton from '@/components/buttons/BuyPlanButton/BuyPlanButton';
import isHavPlan from '@/middlewares/isHavPlan';
import { EmojiEventsRounded } from '@mui/icons-material';
import React from 'react'

const PlansSection = async () => {
    const isHavPlanUser = await isHavPlan()
    const plans = await getPlans();
    return (
        <div className='gap-y-2 flex flex-col'>
            {plans.map(plan => (
                <div key={plan._id} className={`${plan.color === 'GOLD' ? 'bg-amber-500/70' : plan.color === "SILVER" ? 'bg-neutral-400/70' : 'bg-orange-600/70'}  md:h-52 rounded-2xl flex  flex-col-reverse md:flex-row px-4 py-4 relative `}>
                    <div className='plan-background absolute inset-0 -z-10'></div>

                    <div className='flex-1 flex gap-y-2.5 md:gap-y-0 flex-col items-start justify-between md:text-right text-justify'>
                        <div className='flex items-center w-full md:justify-start justify-center gap-x-1.5 '>
                            <h2 className='text-gray-200'>{plan.title}</h2>
                            <p className='text-xl -mb-1.5'>{plan.color === 'GOLD' ? '🥇' : plan.color === "SILVER" ? '🥈' : '🥉'}</p>
                            <p className='text-gray-200 pt-2 md:pt-1'>{plan.time}</p>
                        </div>
                        <p className='text-gray-300 text-sm md:text-base'>{plan.caption}</p>
                        <div className='flex items-center justify-between w-full'>
                            <BuyPlanButton planID={plan._id} isHavPlan={isHavPlanUser} />
                            <div className='flex items-center gap-x-1'>
                                <p className='font-dana-bold text-lg text-gray-200'>{plan.price.toLocaleString()}</p>
                                <p className='text-gray-300'>تومــــــان</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-80 flex-center'>
                        <span>
                            <EmojiEventsRounded className={`${plan.color === 'GOLD' ? 'text-amber-500' : plan.color === "SILVER" ? 'text-neutral-400' : 'text-orange-600'}`} sx={{ width: 200, height: 200 }} />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlansSection