import OffItem from '@/components/shared/OffItem'
import { IProduct } from '@/types/product'
import { CheckRounded } from '@mui/icons-material'
import Image from 'next/image'
import CartBuyButton from './CartBuyButton'

interface ProductDetailsCartSectionProps {
    product: IProduct,
    isAccessToSourceUser: boolean,
    money: number
}

const ProductDetailsCartSection = async ({ product, isAccessToSourceUser, money }: ProductDetailsCartSectionProps) => {

    return (
        <div className='flex flex-col'>
            <div className='w-96 bg-blue rounded-xl py-2 px-4 mt-8'>
                <div className='h-44 -mt-10 relative'>
                    {product.isOff && <OffItem precent={product.precentOff} />}
                    <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} className="rounded-xl" fill={true} alt="" />
                </div>
                <div className='mt-2'>
                    <p className='text-gray-200 flex-center'>{product.title}</p>
                </div>
                <div className='flex justify-between mt-2 bg-gray-800/30 py-2 px-2.5 rounded-xl h-11 items-center'>
                    <p className='text-gray-300'>قیمت سورس کد</p>
                    <div className='flex gap-x-0.5 items-center'>
                        {product.isFree && <p className='text-green-500 text-sm'>رایگـان</p>}
                        {!product.isFree && !product.isOff && (
                            <>
                                <p className='font-dana-bold text-green-500'>{product.price.toLocaleString()}</p>
                                <p className='text-green-500 text-sm'>تومان</p>
                            </>
                        )}
                        {product.isOff && (
                            <>
                                <p className="font-dana text-red-500 line-through text-xs">{Number(product.price).toLocaleString()}</p>
                                <p className="font-dana text-green-500">{Math.round(Number(product.price) - Number((product.price * product.precentOff) / 100)).toLocaleString()}</p>
                                <p className="text-green-500 text-sm">تومان</p>
                            </>
                        )}
                    </div>
                </div>
                {!product.isFree && (
                    <div className='flex justify-between mt-2 bg-gray-800/30 py-2 px-2.5 rounded-xl items-center h-11'>
                        <p className='text-gray-300'>کد تخفیف داری ؟</p>
                        <div>
                            <form action="" className='flex gap-x-1'>
                                <button className='w-7 h-7 bg-blue rounded'>
                                    <CheckRounded className='text-gray-100' />
                                </button>
                                <input type="text" className='bg-gray-800 rounded-md px-2 text-gray-300 text-sm text-center border-none outline-none' placeholder='کد تخفیف رو بزن' />
                            </form>
                        </div>
                    </div>
                )}
                <div className='flex justify-between mt-2 bg-gray-800/30 py-2 px-2.5 rounded-xl items-center h-11 mb-3'>
                    <p className='text-gray-300'>مبلغ پرداختی</p>
                    <div className='flex gap-x-0.5 items-center'>
                        {product.isFree && <p className='text-sm text-gray-500'>رایگـان</p>}
                        {!product.isFree && !product.isOff && (
                            <>
                                <p className='font-dana-bold text-green-500'>{product.price.toLocaleString()}</p>
                                <p className='text-green-500 text-sm'>تومان</p>
                            </>
                        )}
                        {product.isOff && (
                            <>
                                <p className="font-dana text-green-500">{Math.round(Number(product.price) - Number((product.price * product.precentOff) / 100)).toLocaleString()}</p>
                                <p className="text-green-500 text-sm">تومان</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <CartBuyButton isFree={product.isFree} money={money} isAccessToSourceUser={isAccessToSourceUser} productID={JSON.parse(JSON.stringify(product._id))} />
        </div>
    )
}

export default ProductDetailsCartSection