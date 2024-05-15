import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import PlanStatusSection from '@/components/template/UserPanel/Plans/PlanStatusSection'
import PlansSection from '@/components/template/UserPanel/Plans/PlansSection'
import React from 'react'

const page = () => {
  return (
    <UserPanelPageContainer title='پلـــن ها' >
      <PlanStatusSection />
      <PlansSection />
    </UserPanelPageContainer>
  )
}

export default page