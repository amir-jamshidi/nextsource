import UserPanelFooter from '@/components/template/UserPanel/UserPanelFooter'
import UserPanelHeader from '@/components/template/UserPanel/UserPanelHeader'
import UserPanelMenus from '@/components/template/UserPanel/UserPanelMenus'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <UserPanelHeader />
            <UserPanelMenus />
            {children}
            <UserPanelFooter />
        </>
    )
}

export default layout