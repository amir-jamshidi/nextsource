import CartDetailsItem from '@/components/shared/CartDetailsItem'
import { IProduct } from '@/types/product'
import { IUser } from '@/types/user'
import { StarRounded } from '@mui/icons-material'
import React from 'react'

interface ProductDetailsCartsProps {
    product: IProduct,
    commentsCount: number
}

const ProductDetailsCarts = ({ product, commentsCount }: ProductDetailsCartsProps) => {

    const creator = product.creatorID as IUser
    return (
        <section className='mt-8'>
            <div className='grid grid-cols-4 gap-x-1 gap-y-1'>
                <CartDetailsItem title='تعداد فروش :' value={product.buyCount} />
                <CartDetailsItem title='کش بک : ' value={product.cashBack > 0 ? (product.cashBack).toLocaleString() : 'ندارد'} color='text-green-500' text={product.cashBack ? 'تومان' : ''} />
                <CartDetailsItem title='امتیاز محصول :' value={commentsCount > 0 ? (product.rate / commentsCount).toFixed(1) : 'بدون امتیاز'} color='text-amber-500' isNumber={commentsCount > 0} icon={commentsCount > 0 ? <StarRounded fontSize='small' className='text-amber-500' /> : null} />
                <CartDetailsItem title='فروشنده :' value={creator.fullname} isNumber={false} color='text-gray-200' />
                <CartDetailsItem title='موجود در اشتراک ویژه :' value={product.isPlan ? '✔' : '❌'} />
                <CartDetailsItem title='آخرین اپدیت : ' value={String(product.updatedAt?.toLocaleDateString('fa-IR'))} color='text-gray-200' />
                <CartDetailsItem title='پیش نمایش : ' value={'دارد'} isNumber={false} color='text-green-500' />
                <CartDetailsItem title='حجم سورس' value={`${product.size}MB`} />
            </div>
        </section>
    )
}

export default ProductDetailsCarts