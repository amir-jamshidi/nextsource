import { getRequest } from '@/actions/request.action'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import ShowRequestSection from '@/components/template/UserPanel/Request/ShowRequestSection'
import { notFound } from 'next/navigation'
import React from 'react'

interface ShowRequestProps {
  params: { requestID: string }
}

const page = async ({ params: { requestID } }: ShowRequestProps) => {

  const request = await getRequest(requestID)
  if (!request) return notFound();


  return (
    <UserPanelPageContainer title='جزئیات سفارش'>
      <ShowRequestSection request={request} />
    </UserPanelPageContainer>
  )
}

export default page