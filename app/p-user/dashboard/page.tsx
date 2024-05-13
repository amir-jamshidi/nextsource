import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import UserPanelTitle from '@/components/shared/UserPanelTitle'
import DashboardDetailsSection from '@/components/template/UserPanel/Dashboard/DashboardDetailsSection'
import React from 'react'

const Dashboard = () => {
    return (
        <UserPanelPageContainer title='داشبـــورد'>
            <DashboardDetailsSection />
        </UserPanelPageContainer>
    )
}

export default Dashboard