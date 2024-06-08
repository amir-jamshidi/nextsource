import { getProducts, getProductsCount } from '@/actions/product.action'
import FilterSection from '@/components/shared/FilterSection'
import PageTitle from '@/components/shared/PageTitle'
import ShowMoreButton from '@/components/shared/ShowMoreButton'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IProduct } from '@/types/product'
import React from 'react'
import { Suspense } from 'react'
interface ProductsProps {
    searchParams: { page: number, filter: string }
}

const Products = async ({ searchParams: { page, filter } }: ProductsProps) => {

    const products = await getProducts(page, filter) as IProduct[]
    const productsCount = await getProductsCount();

    return (
        <div className='container'>
            <PageTitle title={'همه سورس ها'} titleEn='All Sources' />
            <FilterSection productCount={products.length} />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem product={product} key={product._id} />
                ))}
            </SourceContainer>
            <ShowMoreButton productCount={productsCount} />
        </div>
    )
}

export default Products