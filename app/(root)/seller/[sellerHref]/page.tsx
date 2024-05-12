import { getBestSellers, getSellerByHref } from '@/actions/seller.action'
import PageTitle from '@/components/shared/PageTitle'
import ShowMoreButton from '@/components/shared/ShowMoreButton'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import BestSellersSection from '@/components/template/Seller/BestSellersSection'
import SellerDetailsSection from '@/components/template/Seller/SellerDetailsSection'
import { ISeller } from '@/types/seller'
import { IUser } from '@/types/user'
import { notFound } from 'next/navigation'

interface SellerProps {
    params: { sellerHref: string },
    searchParams: { page: number }
}

const page = async ({ params: { sellerHref }, searchParams: { page } }: SellerProps) => {

    const { seller, products, productsCount } = await getSellerByHref(sellerHref, page)
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
            <ShowMoreButton productCount={productsCount} />
            <BestSellersSection sellers={bestSellers} />
        </div>
    )
}

export default page