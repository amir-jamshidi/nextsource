import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import DashboardDetailsSection from '@/components/template/UserPanel/Dashboard/DashboardDetailsSection'
import ticketModel from '@/models/ticket.module'

import React from 'react'

const Dashboard = async () => {


    // await ticketModel.create({
    //     sectionID: '6644fc63c3a5f0db8064cc5e',
    //     body: 'با سلام . من یه سورس تهیه کردم و الان نمیدونم چجوری باید راهش بندازم . امکانش هست که بهم توضیح بدید که این سورس رو چجوری اول باید تست کنم و تغییر بدم و به چه شکلی میتونم اونو انلاین کنم . چون برای پروژه دانشگاهی هستش و اینو ازمون یه استاد خواسته . خیلی ممنون میشم که راهنماییم کنید . بسیار ممنونم',
    //     orderID: '6636ac6b48e6e249e4fcb2fc',
    //     userID: '6633a3c5ef02c36c6cb84f6f',

    // })

    return (
        <UserPanelPageContainer title='داشبـــورد'>
            <DashboardDetailsSection />
        </UserPanelPageContainer>
    )
}

export default Dashboard