import { getProductByQuery } from '@/actions/product.action'
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import FilterSection from '@/components/shared/FilterSection';
import { IProduct } from '@/types/product';
import React from 'react'
import SearchSection from '@/components/shared/SearchSection';
import ShowMoreButton from '@/components/shared/ShowMoreButton';
import PageTitle from '@/components/shared/PageTitle';
import NoItemSection from '@/components/shared/NoItemSection';

interface SearchProps {
    searchParams: { q: string, filter: string, page: number },

}

const Search = async ({ searchParams: { q = '', filter = '', page = 1 } }: SearchProps) => {

    const { products, productsCount }: { products: IProduct[], productsCount: number } = await getProductByQuery(q, filter, page)

    return (
        <div className='container'>
            <div>
                <PageTitle title='جستحو سورس' titleEn='Search' />
                <SearchSection />
                <FilterSection margin={false} productCount={products.length} />
            </div>
            {products.length > 0 ? (<SourceContainer>
                {products.map(product => (
                    <SourceItem key={product._id} product={product} />
                ))}
            </SourceContainer>) : (
                <NoItemSection />
            )}

            <ShowMoreButton productCount={productsCount} />

        </div>
    )
}

export default Search