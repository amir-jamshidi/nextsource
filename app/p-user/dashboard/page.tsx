import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import DashboardDetailsSection from '@/components/template/UserPanel/Dashboard/DashboardDetailsSection'
import { Metadata } from 'next'


import React from 'react'
export const metadata: Metadata = {
    title: 'نکست سورس | داشبورد'
}
const Dashboard = async () => {

    return (
        <UserPanelPageContainer title='داشبـــورد'>
            <DashboardDetailsSection />
        </UserPanelPageContainer>
    )
}

export default Dashboard