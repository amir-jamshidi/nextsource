import { getProductsByCategoryHref } from '@/actions/product.action'
import FilterSection from '@/components/shared/FilterSection';
import PageTitle from '@/components/shared/PageTitle';
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import PopularProductsSection from '@/components/template/Main/PopularProductsSection/PopularProductsSection';
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
            <PageTitle title={category.title} titleEn={category.titleEn} />
            <FilterSection productCount={products.length} />
            {products.length > 0 ? (
                <>
                    <SourceContainer>
                        {products.map((product: IProduct) => (
                            <SourceItem product={product} />
                        ))}
                    </SourceContainer>
                </>
            ) : (
                <div className='flex-center justify-center flex-col gap-y-1.5 pt-24 pb-16'>
                    <p className='text-xl text-gray-300'>سورسی پیدا نشد</p>
                    <p className='text-base text-gray-400'>اگه دنبال سورسی هستی که پیداش نمیکنی میتونی درخواست سورس بدی</p>
                </div>
            )}
            <PopularProductsSection />

        </div>
    )
}

export default Category