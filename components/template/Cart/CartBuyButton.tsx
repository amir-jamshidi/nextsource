'use client'

import { newOrder } from "@/actions/order.action"
import ToastPromise from "@/libs/ToastPromise"
import { notFound, useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const CartBuyButton = ({ productID, isAccessToSourceUser }: { productID: string, isAccessToSourceUser: boolean }) => {

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleBuyProduct = async () => {
        try {
            setIsLoading(true)
            const result = await newOrder(productID)
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
        <div>
            {isAccessToSourceUser ? (
                <span className={`bg-blue w-96 inline-block cursor-not-allowed text-center rounded-xl py-2.5 text-gray-200 mt-1`}>
                    شما به این سورس دسترسی دارید
                </span>) : (
                <button disabled={isLoading} onClick={handleBuyProduct} className={`${isLoading ? 'bg-gray-800' : 'bg-blue'} w-96 rounded-xl py-2.5 text-gray-200 mt-1`}>
                    {isLoading ? 'انتقال به درگاه پرداخت ...' : 'پرداخت آنلاین'}
                </button>)}
        </div>
    )
}

export default CartBuyButton