import UserPanelHeader from '@/components/template/UserPanel/UserPanelHeader'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <UserPanelHeader />
            {children}
        </>
    )
}

export default layout