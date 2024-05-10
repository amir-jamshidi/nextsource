import { getProductsByCategoryHref } from '@/actions/product.action'
import FilterSection from '@/components/shared/FilterSection';
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import { ICategory } from '@/types/category';
import { IProduct } from '@/types/product';
import { notFound } from 'next/navigation';
import React from 'react'

interface CategoryProps {
    params: { categoryHref: string },
    searchParams: { filter: string }
}

const Category = async ({ params: { categoryHref }, searchParams: { filter } }: CategoryProps) => {
    const { products, category }: { products: IProduct[] | null, category: ICategory | null } = await getProductsByCategoryHref(categoryHref, filter)
    if (!products || !category) return notFound();
    return (
        <div className="container">
            <div className="pt-14 flex flex-center gap-y-1 flex-col">
                <h1 className="text-gray-200 text-2xl">{category.title}</h1>
                <h2 className="text-gray-400 text-xl">{category.titleEn}</h2>
            </div>
            <FilterSection isShowSearch={false} productCount={products.length} />
            <SourceContainer>
                {products.map((product: IProduct) => (
                    <SourceItem product={product} />
                ))}
            </SourceContainer>
        </div>
    )
}

export default Category