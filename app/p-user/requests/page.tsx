import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter'
import isLogin from '@/middlewares/isLogin'
import requestModel from '@/models/request.module'
import { AddRounded } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const page = async () => {

  return (
    <UserPanelPageContainer title='درخواست ها'>
      <UserPanelFilterSection filters={userPanelTicketFilter} title='درخواست' productsCount={6}>
        <div className='flex justify-end items-center h-full pl-2'>
          <Link href={`/p-user/request/insert`}>
            <span className='w-10 h-10 rounded-full flex-center'>
              <AddRounded className="text-gray-300" />
            </span>
          </Link>
        </div>
      </UserPanelFilterSection>
    </UserPanelPageContainer>
  )
}

export default page