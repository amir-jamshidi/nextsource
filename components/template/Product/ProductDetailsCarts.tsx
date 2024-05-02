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
                <CartDetailsItem title='کش بک : ' value={(product.cashBack).toLocaleString()} color='text-green-500' />
                <CartDetailsItem title='امتیاز محصول :' value={(product.rate / commentsCount).toFixed(1)} color='text-amber-500' icon={<StarRounded fontSize='small' className='text-amber-500' />} />
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