import { getCategories } from '@/actions/category.action'
import CategoryItem from '@/components/shared/CategoryItem';
import { ICategory } from '@/types/category';
import React from 'react'

const Categories = async () => {
    const categories = await getCategories() as ICategory[];
    return (
        <div className='container'>
            <div className='mt-16 flex-center'>
                <h1 className='text-gray-200 text-2xl'>دسته بندی ها</h1>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-8'>
                {categories.map((category: ICategory) => (
                    <CategoryItem href={category.href} title={category.title} titleEn={category.titleEn} key={category._id} />
                ))}
            </div>
        </div>
    )
}

export default Categories