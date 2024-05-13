import React from 'react'
import UserPanelTitle from './UserPanelTitle'

const UserPanelPageContainer = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <div className='container'>
            <UserPanelTitle title={title} />
            <section className='px-4 py-4 bg-blue-light rounded-2xl'>
                {children}
            </section>
        </div>

    )
}

export default UserPanelPageContainer