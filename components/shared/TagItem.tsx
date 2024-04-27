import { ICategory } from '@/types/category'
import React from 'react'

interface TagItemProps {
    tag: ICategory
}

const TagItem = ({ tag }: TagItemProps) => {
    return (
        <span className='bg-gray-300 text-gray-800 text-sm rounded px-2'>{tag.title}</span>
    )
}

export default TagItem