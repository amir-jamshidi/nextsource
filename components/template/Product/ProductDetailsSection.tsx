import BackButton from '@/components/buttons/BackButton/BackButton'
import FavoriteButton from '@/components/buttons/FavoriteButton/FavoriteButton'
import OffItem from '@/components/shared/OffItem'
import { IProduct } from '@/types/product'
import { InsertLinkRounded, StarRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IUser } from '@/types/user';


interface ProductDetailsSectionProps {
    product: IProduct,
    isHavPlanUser: boolean | IUser,
    isAccessToSourceUser: boolean,
    isHasToFav: boolean,
    commentRate: number,
    isLoginUser: IUser | boolean
}


const ProductDetailsSection = ({ product, isHavPlanUser, isAccessToSourceUser, isHasToFav, commentRate, isLoginUser }: ProductDetailsSectionProps) => {

    return (
        <section className='bg-blue md:px-6 md:py-6 px-3 py-3 rounded-xl mt-2 border-section'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='lg:px-4 px-2 py-4 order-2 lg:order-1'>
                    <div className='flex-center'>
                        <p className='text-800-200 text-lg'>{product.title}</p>
                    </div>
                    <div className='mt-2'>
                        <p className='line-clamp-5 text-justify text-600-400'>{product.description}</p>
                    </div>
                    <div className='flex flex-col-reverse justify-between gap-y-4 md:flex-row md:items-center bg-gray-white border dark:border-gray-700/30 border-gray-200/50 dark:bg-gray-800/30 rounded-xl px-3 py-3 mt-14 md:mt-20'>
                        <div className='flex items-center gap-x-1'>
                            <FavoriteButton productID={JSON.parse(JSON.stringify(product._id))} isHasToFav={isHasToFav} />
                            {!isLoginUser && (
                                <button className='bg-btns cursor-not-allowed text-sm md:text-base py-1.5 px-3 md:px-6 lg:px-12 rounded-full text-gray-100'>لطفا لاگین کنید</button>

                            )}
                            {((product.isPlan && isHavPlanUser) || isAccessToSourceUser) && (
                                <span className='bg-btns py-1.5 px-3 lg:px-12 rounded-full text-gray-100'>
                                    <span className='block lg:hidden text-sm'>دسترسی دارید</span>
                                    <span className='hidden lg:block'>به این سورس دسترسی دارید</span>
                                </span>
                            )}
                            {(!product.isPlan || !isHavPlanUser) && !isAccessToSourceUser && isLoginUser && (
                                <Link href={`/cart/${product._id}`}>
                                    <button className='bg-gradient-to-r from-green-400 to-green-500 text-sm md:text-base py-1.5 px-3 md:px-6 lg:px-12 rounded-full text-gray-100'>خرید سورس کد</button>
                                </Link>
                            )}
                        </div>
                        <div className='flex gap-x-1 text-sm md:text-base self-end md:self-auto'>
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
                <div className='flex-center relative rounded-xl order-1 lg:order-2 h-72 lg:h-auto'>
                    <Image className='w-full rounded-xl' style={{ objectFit: 'cover' }} src={product.photo} fill={true} alt='Photo' />
                    <BackButton bg={true} />
                    {product.isOff && <OffItem pos='right-1 top-1' precent={product.precentOff} />}
                    {commentRate > 0 && (
                        <div className='absolute bottom-1 left-1 bg-gray-800/30 rounded px-1 flex items-center'>
                            <span className='font-dana-bold text-amber-500 pt-0.5'>{Number(commentRate).toFixed(1)}</span>
                            <StarRounded className='text-amber-500' />
                        </div>
                    )}
                    {product.preView && (
                        <div className='absolute bottom-1 right-1 w-10 h-10 flex rounded-full bg-green-500 items-center justify-center'>
                            <a href={product.preView} target='_blank' className='flex items-center justify-center'>
                                <InsertLinkRounded className='text-gray-100 dark:text-gray-300' />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}


export default ProductDetailsSection