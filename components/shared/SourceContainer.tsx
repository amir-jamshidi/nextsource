const SourceContainer = ({ children, margin = true }: { children: React.ReactNode, margin?: boolean }) => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ${margin ? 'pt-16' : 'pt-6'} gap-y-10 gap-x-2`}>
            {children}
        </div>
    )
}

export default SourceContainer