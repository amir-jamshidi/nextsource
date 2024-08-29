import Link from 'next/link'
import React from 'react'
import { ICategory } from './../../types/category.d';

interface CategorySmalItemProps {
    category: ICategory
}

const CategorySmalItem = ({ category }: CategorySmalItemProps) => {
    return (
        <Link href={`/category/${category.href}`} className='flex items-center mt-4 gap-x-1 px-2'>
            <p className='text-600-400 text-sm'>دسته بندی : </p>
            <p className="text-sm font-morabba-light bg-amber-500 rounded px-2 text-white">{category.title}</p>
        </Link>
    )
}

export default CategorySmalItem