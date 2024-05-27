import RequestItem from '@/components/shared/RequestItem'
import { IRequest } from '@/types/request'
import Link from 'next/link'
import React from 'react'


interface RequestSectionProps {
    requests: IRequest[]
}

const RequestSection = ({ requests }: RequestSectionProps) => {
    return (
        <div className='grid grid-cols-4 gap-1'>
            {requests.map(request => (
                <RequestItem request={request} />
            ))}
        </div>
    )
}

export default RequestSection