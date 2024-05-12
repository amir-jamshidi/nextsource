import { getBestSellers, getSellerByHref } from '@/actions/seller.action'
import PageTitle from '@/components/shared/PageTitle'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import BestSellersSection from '@/components/template/Seller/BestSellersSection'
import SellerDetailsSection from '@/components/template/Seller/SellerDetailsSection'
import { ISeller } from '@/types/seller'
import { IUser } from '@/types/user'
import { notFound } from 'next/navigation'
import React from 'react'

interface SellerProps {
    params: { sellerHref: string }
}

const page = async ({ params: { sellerHref } }: SellerProps) => {

    const { seller, products } = await getSellerByHref(sellerHref)
    const bestSellers = await getBestSellers() as ISeller[]
    if (!seller || !products) notFound()
    const user = seller.userID as IUser;

    return (
        <div className='container'>
            <PageTitle titleEn='فروشنده' title={user.fullname} />
            <SellerDetailsSection seller={seller} />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem product={product} />
                ))}
            </SourceContainer>
            <BestSellersSection sellers={bestSellers} />
        </div>
    )
}

export default page