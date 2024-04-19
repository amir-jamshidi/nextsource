import Header from '@/components/template/Header/Header'
import React from 'react'

interface ILayoutProps {
    children: React.ReactNode
}

const layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default layout