import Link from 'next/link'
import React from 'react'

interface CategoryItemProps {
    title: string,
    titleEn: string,
    href: string
}

const CategoryItem = ({ title, href, titleEn }: CategoryItemProps) => {
    return (

        <Link href={`/category/${href}`}>
            <div className='h-24 bg-blue rounded-xl flex-center flex flex-col shadow-sm dark:shadow-none'>
                <p className='text-base lg:text-lg text-700-300'>{title}</p>
                <p className='text-600-400 text-sm'>{titleEn}</p>
            </div>
        </Link>

    )
}

export default CategoryItem