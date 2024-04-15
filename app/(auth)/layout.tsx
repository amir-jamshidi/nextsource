import React from "react"

interface ILayoutProps {
    children: React.ReactNode
}

const layout = ({ children }: ILayoutProps) => {
    return (
        <>{children}ss</>
    )
}

export default layout