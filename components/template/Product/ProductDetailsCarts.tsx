import CartDetailsItem from '@/components/shared/CartDetailsItem'
import { IProduct } from '@/types/product'
import { ISeller } from '@/types/seller'
import { IUser } from '@/types/user'
import { InsertLinkRounded, LaunchRounded, StarRounded } from '@mui/icons-material'

interface ProductDetailsCartsProps {
    product: IProduct,
    commentRate: number
}

const ProductDetailsCarts = ({ product, commentRate }: ProductDetailsCartsProps) => {

    const creator = product.creatorID as IUser;
    const seller = product.sellerID as ISeller;

    return (
        <section className='mt-8'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 text-sm md:text-base'>
                <CartDetailsItem title='تعداد فروش : ' value={product.buyCount > 0 ? product.buyCount : ''} text={product.buyCount > 0 ? '' : 'بدون فروش'} color='text-gray-200' />
                <CartDetailsItem title='کش بک : ' value={product.cashBack > 0 ? (product.cashBack).toLocaleString() : ''} color='text-green-500' text={product.cashBack > 0 ? 'تومان' : 'ندارد'} />
                <CartDetailsItem title='امتیاز محصول : ' value={commentRate > 0 ? (commentRate).toFixed(1) : 'بدون امتیاز'} color='text-amber-500' isNumber={commentRate > 0} icon={commentRate > 0 ? <StarRounded fontSize='small' className='text-amber-500' /> : null} />
                <CartDetailsItem title='فروشنده : ' value={creator.fullname} isNumber={false} color='text-gray-200' isLink={true} href={`/seller/${seller.href}`} icon={<InsertLinkRounded className='text-amber-500' fontSize='small' />} />
                <CartDetailsItem title='موجود در اشتراک ویژه : ' value={product.isPlan ? '✔' : '❌'} />
                <CartDetailsItem title='آخرین اپدیت : ' value={String(product.updatedAt?.toLocaleDateString('fa-IR'))} color='text-gray-200' />
                <CartDetailsItem title='پیش نمایش : ' value={product.preView ? 'دارد' : 'ندارد'} isLink={product.preView ? true : false} href={product.preView} isNumber={false} icon={product.preView ? <InsertLinkRounded className='text-amber-500' fontSize='small' /> : null} color='text-gray-200' />
                <CartDetailsItem title=' حجم سورس ' value={`${product.size}MB`} color='text-gray-200' />
            </div>
        </section>
    )
}

export default ProductDetailsCarts