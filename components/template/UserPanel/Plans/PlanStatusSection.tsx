import { getPlanDetails } from '@/actions/orderPlan.action';
import React from 'react'

const PlanStatusSection = async () => {

    const isHavPlanUser = await getPlanDetails();

    return (
        <div className='h-12 bg-blue-light rounded-2xl mb-4 flex-center'>
            {!isHavPlanUser && <p className='text-gray-300 text-sm'>شما هیچ پلن فعالی ندارید</p>}
            {isHavPlanUser &&
                <div className='flex gap-x-1 text-sm'>
                    <p className='text-gray-300'>شما تا تاریخ</p>
                    <p className='text-gray-300'>{new Date(isHavPlanUser.expireTime).toLocaleDateString('fa-IR')}</p>
                    <p className='text-gray-300'>پلن دارید</p>
                </div>
            }
        </div>
    )
}

export default PlanStatusSection