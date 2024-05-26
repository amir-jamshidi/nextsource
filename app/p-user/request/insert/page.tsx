import UserPanelPageContainer from "@/components/shared/UserPanelPageContainer"
import InsertRequestSection from "@/components/template/UserPanel/Request/InsertRequestSection"


const page = () => {
    return (
        <UserPanelPageContainer title="درخواست جدیــد">
            <InsertRequestSection />
        </UserPanelPageContainer>
    )
}

export default page