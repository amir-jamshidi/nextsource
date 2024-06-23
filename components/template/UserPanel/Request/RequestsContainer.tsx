import { getMyRequests } from "@/actions/request.action";
import AddSectionUserPanel from "@/components/shared/AddSectionUserPanel";
import UserPanelFilterSection from "@/components/shared/UserPanelFilterSection";
import { userPanelTicketFilter } from "@/constants/userPanelTicketsFilter";
import { notFound } from "next/navigation";
import RequestSection from "./RequestSection";



const RequestsContainer = async ({ filter }: { filter: string }) => {
    const requests = await getMyRequests(filter);
    if (!requests) return notFound();

    return (
        <>
            <UserPanelFilterSection filters={userPanelTicketFilter} title='درخواست' productsCount={requests.length}>
                <AddSectionUserPanel href='/p-user/request/insert' title='ارسال درخواست' />
            </UserPanelFilterSection>
            <RequestSection requests={requests} />
        </>
    )
}

export default RequestsContainer