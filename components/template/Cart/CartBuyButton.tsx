'use client'

import { newOrder } from "@/actions/order.action"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const CartBuyButton = ({ productID, isAccessToSourceUser, money, isFree }: { productID: string, isAccessToSourceUser: boolean, money: number, isFree: boolean }) => {

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleBuyProduct = async (action: 'ONLINE' | 'WALLET') => {
        try {
            setIsLoading(true)
            const result = await newOrder(productID, action)
            setIsLoading(false)
            if (!result.state) return toast.error(result.message)
            toast.success('پرداخت موفق');
            router.back();
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته');
        }
    }


    return (
        <div className="flex flex-col">
            {isAccessToSourceUser ? (
                <span className={`bg-blue w-96 inline-block cursor-not-allowed text-center rounded-xl py-2.5 text-gray-200 mt-1`}>
                    شما به این سورس دسترسی دارید
                </span>) : (
                <button disabled={isLoading} onClick={() => handleBuyProduct('ONLINE')} className={`${isLoading ? 'bg-gray-800' : 'bg-blue'} w-96 rounded-xl py-2.5 text-gray-200 mt-1`}>
                    {isLoading ? 'انتقال به درگاه پرداخت ...' : 'پرداخت آنلاین'}
                </button>)}
            {isAccessToSourceUser || isFree ? (
                null) : (
                <div className="flex justify-center flex-col items-center">
                    <button disabled={isLoading} onClick={() => handleBuyProduct('WALLET')} className={`${isLoading ? 'bg-gray-800' : 'bg-blue'} w-96 rounded-xl py-2.5 text-gray-200 mt-1`}>
                        {isLoading ? 'در حال پرداخت ...' : 'پرداخت با کیف پول'}
                    </button>
                    <div className="h-10 bg-gray-900 w-2/3 rounded-br-3xl rounded-bl-3xl -mt-px flex text-sm gap-x-0.5 items-center justify-center">
                        <p className="text-gray-300">موجودی کیف پول</p>
                        <p className="font-dana-bold text-gray-300">{Math.floor(money).toLocaleString()}</p>
                        <p className="text-gray-300">تومان</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartBuyButton