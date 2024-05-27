import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import UserInfoSection from '@/components/template/UserPanel/Info/UserInfoSection'

const page = () => {
    return (
        <UserPanelPageContainer title='مشخصــات مــن'>
            <UserInfoSection />
        </UserPanelPageContainer>
    )
}

export default page