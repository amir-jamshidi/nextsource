import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketsContainer from '@/components/template/UserPanel/Tickets/TicketsContainer'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'نکست سورس | تیکت ها'
}


const page = async ({ searchParams: { filter = '' } }) => {

  return (
    <UserPanelPageContainer title='تیکـــت ها'>
      <TicketsContainer filter={filter} />
    </UserPanelPageContainer>
  )
}

export default page