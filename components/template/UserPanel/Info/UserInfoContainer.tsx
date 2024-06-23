import React from 'react'
import isLogin from './../../../../middlewares/isLogin';
import { notFound } from 'next/navigation';
import UserInfoSection from './UserInfoSection';

const UserInfoContainer = async () => {
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();

    return (
        <>
            <UserInfoSection user={JSON.parse(JSON.stringify(isLoginUser))} />
        </>
    )
}

export default UserInfoContainer