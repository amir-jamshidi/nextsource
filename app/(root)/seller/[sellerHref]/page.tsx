import { getBestSellers, getSellerByHref, getSellerFullname } from '@/actions/seller.action'
import PageTitle from '@/components/shared/PageTitle'
import ShowMoreButton from '@/components/shared/ShowMoreButton'
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

export const generateMetadata = async ({ params }: { params: { sellerHref: string } }) => {
    const sellerName = await getSellerFullname(params.sellerHref)
    if (!sellerName) return notFound();
    return {
        title: `نکست سورس | فروشنده ${sellerName}`
    }
}

const SellerPage = async ({ params: { sellerHref = '' }, searchParams: { page = 1 } }: SellerProps) => {

    const sellerDetails = await getSellerByHref(sellerHref, page)
    if (!sellerDetails) return notFound();
    const { seller, products, productsCount } = sellerDetails

    const bestSellers = await getBestSellers() as ISeller[]
    const user = seller.userID as IUser;

    return (
        <div className='container'>
            <PageTitle titleEn='فروشنده' title={user.fullname} />
            <div className='flex flex-col lg:flex-row mt-16 gap-x-2 gap-y-12'>
                <SellerDetailsSection seller={seller} />
                <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-y-10 gap-x-2'>
                    {products.map(product => (
                        <SourceItem key={product._id} product={product} />
                    ))}
                </div>

            </div>
            <ShowMoreButton productCount={productsCount} />
            <BestSellersSection sellers={bestSellers} />
        </div>
    )
}

export default SellerPage