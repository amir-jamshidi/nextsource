import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import WalletSection from '@/components/template/UserPanel/Wallet/WalletSection'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'نکست سورس | کیف پول'
}


const page = () => {
  return (
    <UserPanelPageContainer title='کیـــف پول'>
      <WalletSection />
    </UserPanelPageContainer>
  )
}

export default page