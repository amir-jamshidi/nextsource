import { getMyRequests } from '@/actions/request.action'
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
        <div className='flex justify-end items-center h-full pl-2'>
          <Link href={`/p-user/request/insert`}>
            <span className='w-10 h-10 rounded-full flex-center'>
              <AddRounded className="text-gray-300" />
            </span>
          </Link>
        </div>
      </UserPanelFilterSection>
      <RequestSection requests={requests} />
    </UserPanelPageContainer>
  )
}

export default page