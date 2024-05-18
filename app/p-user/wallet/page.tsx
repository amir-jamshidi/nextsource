import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import WalletSection from '@/components/template/UserPanel/Wallet/WalletSection'
import React from 'react'

const page = () => {
  return (
    <UserPanelPageContainer title='کیـــف پول'>
        <WalletSection/>
    </UserPanelPageContainer>
  )
}

export default page