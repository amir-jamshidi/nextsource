import CartDetailsItem from '@/components/shared/CartDetailsItem'
import { IProduct } from '@/types/product'
import { ISeller } from '@/types/seller'
import { IUser } from '@/types/user'
import { LaunchRounded, StarRounded } from '@mui/icons-material'

interface ProductDetailsCartsProps {
    product: IProduct,
    commentsCount: number
}

const ProductDetailsCarts = ({ product, commentsCount }: ProductDetailsCartsProps) => {

    const creator = product.creatorID as IUser;
    const seller = product.sellerID as ISeller;

    return (
        <section className='mt-8'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-1.5 gap-y-1.5 text-sm md:text-base'>
                <CartDetailsItem title='تعداد فروش :' value={product.buyCount > 0 ? product.buyCount : ''} text={product.buyCount > 0 ? '' : 'بدون فروش'} color='text-gray-200' />
                <CartDetailsItem title='کش بک : ' value={product.cashBack > 0 ? (product.cashBack).toLocaleString() : ''} color='text-green-500' text={product.cashBack > 0 ? 'تومان' : 'ندارد'} />
                <CartDetailsItem title='امتیاز محصول :' value={commentsCount > 0 ? (product.rate / commentsCount).toFixed(1) : 'بدون امتیاز'} color='text-amber-500' isNumber={commentsCount > 0} icon={commentsCount > 0 ? <StarRounded fontSize='small' className='text-amber-500' /> : null} />
                <CartDetailsItem title='فروشنده :' value={creator.fullname} isNumber={false} color='text-gray-200' isLink={true} href={`/seller/${seller.href}`} icon={<LaunchRounded className='text-amber-500' fontSize='small' />} />
                <CartDetailsItem title='موجود در اشتراک ویژه :' value={product.isPlan ? '✔' : '❌'} />
                <CartDetailsItem title='آخرین اپدیت : ' value={String(product.updatedAt?.toLocaleDateString('fa-IR'))} color='text-gray-200' />
                <CartDetailsItem title='پیش نمایش : ' value={product.preView ? 'دارد' : 'ندارد'} isLink={product.preView ? true : false} href={product.preView} isNumber={false} icon={product.preView ? <LaunchRounded className='text-amber-500' fontSize='small' /> : null} color='text-gray-200' />
                <CartDetailsItem title='حجم سورس' value={`${product.size}MB`} color='text-gray-200' />
            </div>
        </section>
    )
}

export default ProductDetailsCarts