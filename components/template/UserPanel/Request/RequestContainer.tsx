import { getRequest } from '@/actions/request.action';
import { notFound } from 'next/navigation';
import ShowRequestSection from './ShowRequestSection';

const RequestContainer = async ({ requestID }: { requestID: string }) => {
    const request = await getRequest(requestID)
    if (!request) return notFound();

    return (
        <>
            <ShowRequestSection request={request} />
        </>
    )
}

export default RequestContainer