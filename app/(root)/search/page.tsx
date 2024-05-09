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

    const products = await getProductByQuery(q, filter) as IProduct[];



    return (
        <div className='container'>
            <div>
                <SearchInput productCount={products.length} />
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

        </div>
    )
}

export default Search