import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import OrderDetails from '@/components/template/UserPanel/Order/OrderDetails'
import { Metadata } from 'next'

interface OrderProps {
  params: { orderID: string }
}

export const metadata: Metadata = {
  title: 'نکست سورس | جزئیات سفارش'
}

const page = ({ params: { orderID } }: OrderProps) => {
 
  return (
    <UserPanelPageContainer title='جزئیـــات سفارش'>
      <OrderDetails orderID={orderID} />
    </UserPanelPageContainer>
  )
}  




export default page



