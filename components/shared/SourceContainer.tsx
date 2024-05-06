const SourceContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-y-10 gap-x-2">
            {children}
        </div>
    )
}

export default SourceContainer