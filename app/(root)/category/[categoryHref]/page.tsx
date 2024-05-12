import { getProductsByCategoryHref } from '@/actions/product.action'
import FilterSection from '@/components/shared/FilterSection';
import NoItemSection from '@/components/shared/NoItemSection';
import PageTitle from '@/components/shared/PageTitle';
import ShowMoreButton from '@/components/shared/ShowMoreButton';
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import PopularProductsSection from '@/components/template/Main/PopularProductsSection/PopularProductsSection';
import { ICategory } from '@/types/category';
import { IProduct } from '@/types/product';
import { notFound } from 'next/navigation';
import React from 'react'

interface CategoryProps {
    params: { categoryHref: string },
    searchParams: { filter: string, page: number }
}

const Category = async ({ params: { categoryHref }, searchParams: { filter, page } }: CategoryProps) => {
    const { products, category, productsCount }: { products: IProduct[] | null, category: ICategory | null, productsCount: number } = await getProductsByCategoryHref(categoryHref, filter, page)

    if (!products || !category) return notFound();
    return (
        <div className="container">
            <PageTitle title={category.title} titleEn={category.titleEn} />
            <FilterSection productCount={products.length} />
            {products.length > 0 ? (
                <>
                    <SourceContainer>
                        {products.map((product: IProduct) => (
                            <SourceItem product={product} />
                        ))}
                    </SourceContainer>
                    <ShowMoreButton productCount={productsCount} />
                </>
            ) : (
                <NoItemSection />
            )}
            <PopularProductsSection />

        </div>
    )
}

export default Category