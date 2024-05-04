'use client'

import { newOrder } from "@/actions/order.action"
import Modal from "@/components/shared/Modal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const CartBuyButton = ({ productID, isAccessToSourceUser, money, isFree }: { productID: string, isAccessToSourceUser: boolean, money: number, isFree: boolean }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);

    const router = useRouter();

    const handleBuyProduct = async (action: 'ONLINE' | 'WALLET') => {
        if (isShowModal) setIsShowModal(false);
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
        <>
            <Modal isShow={isShowModal}>
                <h3 className="text-center text-xl text-gray-200">پرداخت با کیف پول انجام بشه ؟</h3>
                <p className="text-center mt-4 text-gray-300">مطمئنی که میخوای این سورس رو با موجودی کیف پولت پرداخت کنی ؟ به این نکته دقت کن اگه با کیف پول پرداخت کنی دیگه کش بک بهت تعلق نمیگیره</p>
                <div className="flex-center mt-4 gap-x-1">
                    <button onClick={() => handleBuyProduct('WALLET')} className="bg-green-500/60 rounded-full text-sm text-gray-100 px-2 py-1.5">اره پرداخت میکنم</button>
                    <button onClick={() => setIsShowModal(false)} className="bg-red-500/60 rounded-full text-sm text-gray-100 px-2 py-1.5">نه نمیخوام</button>
                </div>
            </Modal>
            
            <div className="flex flex-col">
                {isAccessToSourceUser ? (
                    <span className={`bg-blue w-96 inline-block cursor-not-allowed text-center rounded-xl py-2.5 text-gray-200 mt-1`}>
                        شما به این سورس دسترسی دارید
                    </span>) : (
                    <button disabled={isLoading} onClick={() => handleBuyProduct('ONLINE')} className={`${isLoading ? 'bg-gray-800' : 'bg-blue'} w-96 rounded-xl py-2.5 text-gray-200 mt-1`}>
                        {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت آنلاین'}
                    </button>)}
                {isAccessToSourceUser || isFree ? (
                    null) : (
                    <div className="flex justify-center flex-col items-center">
                        <button disabled={isLoading} onClick={() => setIsShowModal(true)} className={`${isLoading ? 'bg-gray-800' : 'bg-blue'} w-96 rounded-xl py-2.5 text-gray-200 mt-1`}>
                            {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت با کیف پول'}
                        </button>
                        <div className="h-10 bg-gray-900 w-2/3 rounded-br-3xl rounded-bl-3xl -mt-px flex text-sm gap-x-0.5 items-center justify-center">
                            <p className="text-gray-300">موجودی کیف پول</p>
                            <p className="font-dana-bold text-gray-300">{Math.floor(money).toLocaleString()}</p>
                            <p className="text-gray-300">تومان</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartBuyButton
