import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import PlanStatusSection from '@/components/template/UserPanel/Plans/PlanStatusSection'
import PlansSection from '@/components/template/UserPanel/Plans/PlansSection'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'نکست سورس | پلن ها'
}

const page = () => {
  return (
    <UserPanelPageContainer title='پلـــن ها' >
      <PlanStatusSection />
      <PlansSection />
    </UserPanelPageContainer>
  )
}

export default page