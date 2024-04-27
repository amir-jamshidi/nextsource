import { ICategory } from '@/types/category'
import Link from 'next/link'
import React from 'react'

interface TagItemProps {
    tag: ICategory
}

const TagItem = ({ tag }: TagItemProps) => {
    return (
        <Link href={tag.href}>
            <span className='bg-gray-300 text-gray-800 text-sm rounded px-2'>{tag.title}</span>
        </Link>
    )
}

export default TagItem