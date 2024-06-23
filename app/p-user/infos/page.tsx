import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer';
import UserInfoContainer from '@/components/template/UserPanel/Info/UserInfoContainer';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'نکست سورس | مشخصات من'
}
const page = () => {

    return (
        <UserPanelPageContainer title='مشخصــات مــن'>
            <UserInfoContainer />
        </UserPanelPageContainer>
    )
}


export default page

