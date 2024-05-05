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
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-1 text-sm md:text-base'>
                <CartDetailsItem title='تعداد فروش :' value={product.buyCount > 0 ? product.buyCount : ''} text={product.buyCount > 0 ? '' : 'بدون فروش'} color='text-gray-200' />
                <CartDetailsItem title='کش بک : ' value={product.cashBack > 0 ? (product.cashBack).toLocaleString() : ''} color='text-green-500' text={product.cashBack > 0 ? 'تومان' : 'ندارد'} />
                <CartDetailsItem title='امتیاز محصول :' value={commentsCount > 0 ? (product.rate / commentsCount).toFixed(1) : 'بدون امتیاز'} color='text-amber-500' isNumber={commentsCount > 0} icon={commentsCount > 0 ? <StarRounded fontSize='small' className='text-amber-500' /> : null} />
                <CartDetailsItem title='فروشنده :' value={creator.fullname} isNumber={false} color='text-gray-200' />
                <CartDetailsItem title='موجود در اشتراک ویژه :' value={product.isPlan ? '✔' : '❌'} />
                <CartDetailsItem title='آخرین اپدیت : ' value={String(product.updatedAt?.toLocaleDateString('fa-IR'))} color='text-gray-200' />
                <CartDetailsItem title='پیش نمایش : ' value={product.preView ? 'دارد' : 'ندارد'} isNumber={false} color='text-gray-200' />
                <CartDetailsItem title='حجم سورس' value={`${product.size}MB`} color='text-gray-200' />
            </div>
        </section>
    )
}

export default ProductDetailsCarts