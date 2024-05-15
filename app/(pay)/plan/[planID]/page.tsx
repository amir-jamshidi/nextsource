import { getPlanByID } from '@/actions/plan.action'
import PlanDetailsSection from '@/components/template/PlanCart/PlanDetailsSection';
import { notFound } from 'next/navigation';
import React from 'react'

interface PlanProps {
    params: { planID: string }
}

const page = async ({ params: { planID } }: PlanProps) => {

    const planDetails = await getPlanByID(planID);
    if (!planDetails) return notFound();
    
    return (
        <section>
            <div className='container px-6'>
                <div className='flex-center h-cart'>
                    <PlanDetailsSection planDetails={planDetails} />
                </div>
            </div>
        </section>
    )
}

export default page