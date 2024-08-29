import React, { Suspense } from 'react'
import UserPanelTitle from './UserPanelTitle'
import UserPanelLoading from './UserPanelLoading'

const UserPanelPageContainer = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className='container'>
            <UserPanelTitle title={title} />
            <Suspense fallback={<UserPanelLoading />}>
                <section className='px-4 py-4 bg-blue-menu border-section rounded-2xl'>
                    {children}
                </section>
            </Suspense>
        </div>

    )
}

export default UserPanelPageContainer