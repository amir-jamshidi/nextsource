import { getProducts, getProductsCount } from '@/actions/product.action'
import FilterSection from '@/components/shared/FilterSection'
import ShowMoreButton from '@/components/shared/ShowMoreButton'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IProduct } from '@/types/product'
import React from 'react'

interface ProductsProps {
    searchParams: { page: number, filter: string }
}

const Products = async ({ searchParams: { page, filter } }: ProductsProps) => {

    const products = await getProducts(page, filter) as IProduct[]
    const productsCount = await getProductsCount();
    return (
        <div className='container'>
            <div className="pt-8 flex flex-center gap-y-1 flex-col">
                <h1 className="text-gray-200 text-2xl">همه سورس ها</h1>
                <h2 className="text-gray-400 text-xl">All Sources</h2>
            </div>
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