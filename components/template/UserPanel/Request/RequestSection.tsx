import AddSectionUserPanel from '@/components/shared/AddSectionUserPanel'
import NoItemUserPanel from '@/components/shared/NoItemUserPanel'
import RequestItem from '@/components/shared/RequestItem'
import { IRequest } from '@/types/request'
import Link from 'next/link'
import React from 'react'


interface RequestSectionProps {
    requests: IRequest[]
}

const RequestSection = ({ requests }: RequestSectionProps) => {
    return (
        <>
            {requests.length > 0 ? (
                <div className='grid grid-cols-3 gap-2'>
                    {requests.map(request => (
                        <RequestItem request={request} />
                    ))}
                </div>
            ) : (
                <NoItemUserPanel title='تا الان درخواستی ارسال نکردی' margin={false} href='/p-user/request/insert' buttonTitle='ارسال درخواست' />
            )}

        </>
    )
}

export default RequestSection