import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import RequestsContainer from '@/components/template/UserPanel/Request/RequestsContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'نکست سورس | درخواست ها'
}

const page = async ({ searchParams: { filter = '' } }) => {

  return (
    <UserPanelPageContainer title='درخواست ها'>
      <RequestsContainer filter={filter} />
    </UserPanelPageContainer>
  )
}

export default page