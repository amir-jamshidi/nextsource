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
    
    return {
        title: `نکست سورس | فروشنده ${sellerName}`
    }
}

const page = async ({ params: { sellerHref }, searchParams: { page } }: SellerProps) => {
   
    const { seller, products, productsCount } = await getSellerByHref(sellerHref, page)
    const bestSellers = await getBestSellers() as ISeller[]
    if (!seller || !products) notFound()
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

export default page