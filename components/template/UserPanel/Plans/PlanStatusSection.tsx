import isHavPlan from '@/middlewares/isHavPlan'
import React from 'react'

const PlanStatusSection = async () => {

    const isHavPlanUser = await isHavPlan();
    return (
        <div className='h-12 bg-blue-light rounded-2xl mb-4 flex-center'>
            {!isHavPlanUser && <p className='text-gray-300'>شما هیچ پلن فعالی ندارید</p>}
        </div>
    )
}

export default PlanStatusSection