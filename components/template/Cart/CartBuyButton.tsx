'use client'

import { newOrder } from "@/actions/order.action"
import ToastPromise from "@/libs/ToastPromise"
import { useState } from "react"
import toast from "react-hot-toast"


const CartBuyButton = ({ productID, isAccessToSourceUser }: { productID: string, isAccessToSourceUser: boolean }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleBuyProduct = async () => {
        try {
            setIsLoading(true)
            await newOrder(productID)
            setIsLoading(false)
            toast.success('پرداخت موفق')
        } catch (error) {
            throw new Error('Error To Send new Order');
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