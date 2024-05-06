interface ILayoutProps {
    children: React.ReactNode
}

const layout = ({ children }: ILayoutProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout