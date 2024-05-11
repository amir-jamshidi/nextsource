import { getProductByQuery } from '@/actions/product.action'
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import FilterSection from '@/components/shared/FilterSection';
import { IProduct } from '@/types/product';
import React from 'react'
import SearchSection from '@/components/shared/SearchSection';
import ShowMoreButton from '@/components/shared/ShowMoreButton';

interface SearchProps {
    searchParams: { q: string, filter: string, page: number },

}

const Search = async ({ searchParams: { q = '', filter = '', page = 1 } }: SearchProps) => {

    const { products, productsCount }: { products: IProduct[], productsCount: number } = await getProductByQuery(q, filter, page)

    return (
        <div className='container'>
            <div>
                <SearchSection />
                <FilterSection margin={false} productCount={products.length} />
            </div>
            {products.length > 0 ? (<SourceContainer>
                {products.map(product => (
                    <SourceItem product={product} />
                ))}
            </SourceContainer>) : (
                <div className='flex-center justify-center flex-col gap-y-1.5 pt-24 pb-16'>
                    <p className='text-xl text-gray-300'>سورسی پیدا نشد</p>
                    <p className='text-base text-gray-400'>اگه دنبال سورسی هستی که پیداش نمیکنی میتونی درخواست سورس بدی</p>
                </div>
            )}

            <ShowMoreButton productCount={productsCount} />

        </div>
    )
}

export default Search