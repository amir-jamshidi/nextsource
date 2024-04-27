import { IProduct } from '@/types/product'
import Image from 'next/image'
import React from 'react'

interface ProductDetailsSectionProps {
    product: IProduct
}

const ProductDetailsSection = ({ product }: ProductDetailsSectionProps) => {
    return (
        <section className='bg-blue px-6 py-6 rounded-xl mt-4'>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='flex-center'>
                        <p className='text-gray-200 text-lg'>{product.title}</p>
                    </div>
                </div>
                <div className='flex-center relative h-80 rounded-xl'>
                    <Image className='w-full rounded-xl' style={{ objectFit: 'cover' }} src={'https://sabzlearn.ir/wp-content/uploads/2024/01/IMAGE-1402-10-21-20_14_43-1-768x432.webp'} fill={true} alt='Photo' />
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsSection