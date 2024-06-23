import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import OrdersContainer from '@/components/template/UserPanel/Orders/OrdersContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'نکست سورس | سفارش ها'
}

const page = ({ searchParams: { filter = '' } }) => {

  return (
    <UserPanelPageContainer title='سفـــارش ها' >
      <OrdersContainer filter={filter} />
    </UserPanelPageContainer>
  )
}

export default page