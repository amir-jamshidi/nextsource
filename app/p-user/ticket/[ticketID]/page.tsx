import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import TicketDetailsSection from '@/components/template/UserPanel/Ticket/TicketDetailsSection'
import { Metadata } from 'next'

interface TicketProps {
  params: { ticketID: string }
}
export const metadata: Metadata = {
  title: 'نکست سورس | جزئیات تیکت'
}
const page = ({ params: { ticketID } }: TicketProps) => {

  return (
    <UserPanelPageContainer title='جزئیـــات تیکت'>
      <TicketDetailsSection ticketID={ticketID} />
    </UserPanelPageContainer>
  )
}

export default page