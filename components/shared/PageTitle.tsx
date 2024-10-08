import React from 'react'

interface PageTitleProps {
    title: string,
    titleEn?: string
}

const PageTitle = ({ title, titleEn }: PageTitleProps) => {
    return (
        <div className="pt-8 flex flex-center gap-y-1 flex-col">
            <h1 className="text-800-200 text-lg lg:text-2xl">{title}</h1>
            {titleEn && (
                <h2 className="text-600-400 text-base lg:text-lg">{titleEn}</h2>
            )}
        </div>
    )
}

export default PageTitle