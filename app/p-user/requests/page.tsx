import { getMyRequests } from '@/actions/request.action'
import AddSectionUserPanel from '@/components/shared/AddSectionUserPanel'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import RequestSection from '@/components/template/UserPanel/Request/RequestSection'
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter'
import requestModel from '@/models/request.module'
import { AddRounded } from '@mui/icons-material'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ searchParams: { filter = '' } }) => {

  const requests = await getMyRequests(filter);
  if (!requests) return notFound();


  return (
    <UserPanelPageContainer title='درخواست ها'>

      <UserPanelFilterSection filters={userPanelTicketFilter} title='درخواست' productsCount={requests.length}>
        <AddSectionUserPanel href='/p-user/request/insert' title='ارسال درخواست' />
      </UserPanelFilterSection>

      <RequestSection requests={requests} />
    </UserPanelPageContainer>
  )
}

export default page