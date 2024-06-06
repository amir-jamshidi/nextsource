import { getCategories } from '@/actions/category.action'
import { getPopularTags } from '@/actions/tag.action';
import CategoryItem from '@/components/shared/CategoryItem';
import PageTitle from '@/components/shared/PageTitle';
import PopularTagSection from '@/components/shared/PopularTagSection';
import { ICategory } from '@/types/category';
import { ITag } from '@/types/tag';
import React from 'react'

const Categories = async () => {
    const categories = await getCategories() as ICategory[];
    const tags = await getPopularTags() as ITag[];
    return (
        <div className='container'>
            <PageTitle title='دسته بندی ها' titleEn='Categories' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 mt-8'>
                {categories.map((category: ICategory) => (
                    <CategoryItem href={category.href} title={category.title} titleEn={category.titleEn} key={category._id} />
                ))}
            </div>
            <PopularTagSection tags={tags} />
        </div>
    )
}

export default Categories