import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import UserInfoSection from '@/components/template/UserPanel/Info/UserInfoSection'
import isLogin from '@/middlewares/isLogin'
import { notFound } from 'next/navigation';

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