import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import DashboardDetailsSection from '@/components/template/UserPanel/Dashboard/DashboardDetailsSection'
import ticketModel from '@/models/ticket.module'

import React from 'react'

const Dashboard = async () => {

    return (
        <UserPanelPageContainer title='داشبـــورد'>
            <DashboardDetailsSection />
        </UserPanelPageContainer>
    )
}

export default Dashboard