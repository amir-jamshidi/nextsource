import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import UserInfoSection from '@/components/template/UserPanel/Info/UserInfoSection'
import isLogin from '@/middlewares/isLogin'
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
export const metadata: Metadata = {
    title: 'نکست سورس | مشخصات من'
}
const page = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();
    return (
        <UserPanelPageContainer title='مشخصــات مــن'>
            <UserInfoSection user={isLoginUser} />
        </UserPanelPageContainer>
    )
}

 
export default page

