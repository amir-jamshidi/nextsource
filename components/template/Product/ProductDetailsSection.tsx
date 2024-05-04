import BackButton from '@/components/buttons/BackButton/BackButton'
import FavoriteButton from '@/components/buttons/FavoriteButton/FavoriteButton'
import OffItem from '@/components/shared/OffItem'
import TagItem from '@/components/shared/TagItem'
import { ICategory } from '@/types/category'
import { IProduct } from '@/types/product'
import { ITag } from '@/types/tag'
import { IUser } from '@/types/user'
import { InsertLinkRounded, StarRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ProductDetailsSectionProps {
    product: IProduct,
    isHavPlanUser: boolean | IUser,
    isAccessToSourceUser: boolean,
    isHasToFav: boolean,
    commentsCount: number
}

const ProductDetailsSection = ({ product, isHavPlanUser, isAccessToSourceUser, isHasToFav, commentsCount }: ProductDetailsSectionProps) => {

    return (
        <section className='bg-blue px-6 py-6 rounded-xl mt-2'>
            <div className='grid grid-cols-2'>
                <div className='px-4 py-4'>
                    <div className='flex-center'>
                        <p className='text-gray-200 text-lg'>{product.title}</p>

                    </div>
                    <div className='mt-2'>
                        <p className='line-clamp-5 text-justify text-gray-400'>{product.description}</p>
                    </div>
                    <div className='flex justify-between items-center  bg-gray-800/30 rounded-xl px-3 py-2 mt-20'>
                        <div className='flex items-center gap-x-1'>
                            <FavoriteButton productID={JSON.parse(JSON.stringify(product._id))} isHasToFav={isHasToFav} />
                            {((product.isPlan && isHavPlanUser) || isAccessToSourceUser) && (
                                <span className='bg-blue py-1.5 px-12 rounded-full text-gray-100'>شما به این سورس دسترسی دارید</span>
                            )}
                            {(!product.isPlan || !isHavPlanUser) && !isAccessToSourceUser && (
                                <Link href={`/cart/${product._id}`}>
                                    <button className='bg-button py-1.5 px-12 rounded-full text-gray-100'>خرید سورس کد</button>
                                </Link>
                            )}
                        </div>
                        <div className='flex gap-x-1'>
                            {!product.isFree && !product.isOff && (
                                <>
                                    <p className='font-dana-bold text-green-500'>{product.price.toLocaleString()}</p>
                                    <p className='text-green-500'>تومــان</p>
                                </>)}
                            {product.isFree && (
                                <>
                                    <p className='font-dana-bold text-green-500 line-through'>{product.price.toLocaleString()}</p>
                                    <p className='text-red-500'>رایگــان</p>
                                </>)}
                            {product.isOff && !product.isFree && (
                                <>
                                    <p className='font-dana-bold text-red-500 line-through'>{product.price.toLocaleString()}</p>
                                    <p className="font-dana text-green-500">{Math.round(Number(product.price) - Number((product.price * product.precentOff) / 100)).toLocaleString()}</p>
                                    <p className='text-green-500'>تومــان</p>
                                </>
                            )}

                        </div>
                    </div>
                </div>
                <div className='flex-center relative rounded-xl'>
                    <Image className='w-full rounded-xl' style={{ objectFit: 'cover' }} src={'https://sabzlearn.ir/wp-content/uploads/2024/01/IMAGE-1402-10-21-20_14_43-1-768x432.webp'} fill={true} alt='Photo' />
                    <BackButton />
                    {product.isOff && <OffItem pos='right-1 top-1' precent={product.precentOff} />}
                    {commentsCount > 0 && (
                        <div className='absolute bottom-1 left-1 bg-gray-800/30 rounded px-1 flex items-center'>
                            <span className='font-dana-bold text-amber-500 pt-0.5'>{Number(product.rate / commentsCount).toFixed(1)}</span>
                            <StarRounded className='text-amber-500' />
                        </div>
                    )}
                    {product.preView && (
                        <div className='absolute bottom-1 right-1 w-10 h-10 rounded-full bg-green-500 flex-center'>
                            <a href={product.preView}>
                                <InsertLinkRounded className='text-gray-300' />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsSection