import UserPanelPageContainer from "@/components/shared/UserPanelPageContainer"
import InsertRequestSection from "@/components/template/UserPanel/Request/InsertRequestSection"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'نکست سورس | درخواست جدید'
}
const page = () => {
    return (
        <UserPanelPageContainer title="درخواست جدیــد">
            <InsertRequestSection />
        </UserPanelPageContainer>
    )
}

export default page