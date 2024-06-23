import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import RequestContainer from '@/components/template/UserPanel/Request/RequestContainer'
import { Metadata } from 'next'

interface ShowRequestProps {
  params: { requestID: string }
}


export const metadata: Metadata = {
  title: 'نکست سورس | جزئیات درخواست'
}

const page = ({ params: { requestID } }: ShowRequestProps) => {
  
  return (
    <UserPanelPageContainer title='جزئیات سفارش'>
      <RequestContainer requestID={requestID} />
    </UserPanelPageContainer>
  )
}

export default page