import { getProductByQuery } from '@/actions/product.action'
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import SearchInput from '@/components/template/Search/SearchInput';
import { IProduct } from '@/types/product';
import React from 'react'

interface SearchProps {
    searchParams: { q: string, filter: string },

}

const Search = async ({ searchParams: { q = '', filter = '' } }: SearchProps) => {

    const result = await getProductByQuery(q, filter) as IProduct[];



    return (
        <div className='container'>
            <div>
                <SearchInput />
            </div>
            <SourceContainer>
                {result.map(product => (
                    <SourceItem product={product} />
                ))}
            </SourceContainer>
        </div>
    )
}

export default Search