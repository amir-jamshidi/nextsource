import { getPopularCategories } from '@/actions/category.action'
import CategoryItem from '@/components/shared/CategoryItem'
import SctionTitle from '@/components/shared/SctionTitle'
import { ICategory } from '@/types/category'
import React from 'react'

const PopularCategoriesSection = async () => {
    const categories = await getPopularCategories() as ICategory[];
    return (
        <section className='mt-16'>
            <SctionTitle title='محبوب ترین دسته بندی ها' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-16">
                {categories.map(category => (
                    <CategoryItem key={JSON.stringify(category._id)} href={category.href} title={category.title} titleEn={category.titleEn} />
                ))}
            </div>
        </section>
    )
}

export default PopularCategoriesSection