import UserPanelLoading from '@/components/shared/UserPanelLoading'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import DashboardDetailsSection from '@/components/template/UserPanel/Dashboard/DashboardDetailsSection'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'نکست سورس | داشبورد'
}
const Dashboard = () => {

    return (
        // <div>
        //     <h1 className='text-2xl text-gray-100 text-center'>Dashboard</h1>
        //     <Suspense fallback={<p>Loading ...</p>}>
        //         <DashboardDetailsSection />
        //     </Suspense>
        // </div>
        <UserPanelPageContainer title='داشبـــورد'>
            <DashboardDetailsSection />
        </UserPanelPageContainer>
    )
}

export default Dashboard