'use client'

import { newOrderPlan } from "@/actions/plan.action";
import Modal from "@/components/shared/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";

interface PlanBuyButtonsProps {
    money: number,
    planID: string,
    isHavPlan: boolean,
    planColor: string
}

const PlanBuyButtons = ({ money, planID, isHavPlan, planColor }: PlanBuyButtonsProps) => {

    const [isShowModal, setIsShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleBuyPlan = async (action: 'ONLINE' | 'WALLET') => {
        try {
            setIsShowModal(false);
            setIsLoading(true)
            const res = await newOrderPlan(action, planID)
            if (!res.state) return toast.error(res.message)
            toast.success(res.message)
            router.push(`/p-user/plans`);
            router.refresh();
        } catch (error) {
            throw new Error('خطای ناشناخته')
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <>
            <Modal isShow={isShowModal}>
                <h3 className="text-center text-xl text-800-200">پرداخت با کیف پول انجام بشه ؟</h3>
                <p className="text-center mt-4 text-700-300">مطمئنی که میخوای پلن رو با موجودی کیف پولت پرداخت کنی ؟</p>
                <div className="flex-center mt-4 gap-x-1">
                    <button onClick={() => handleBuyPlan('WALLET')} className="dark:bg-green-500/60 bg-green-500 rounded-full text-sm text-gray-100 px-2 py-1.5">اره پرداخت میکنم</button>
                    <button onClick={() => setIsShowModal(false)} className="dark:bg-red-500/60 bg-red-500 rounded-full text-sm text-gray-100 px-2 py-1.5">نه نمیخوام</button>
                </div>
            </Modal>

            <div className="flex flex-col">

                {isHavPlan ? (<>

                    <span className={`${planColor === 'GOLD' ? 'dark:bg-amber-500/70 bg-amber-500' : planColor === "SILVER" ? 'dark:bg-neutral-400/70 bg-neutral-400' : 'dark:bg-orange-600/70 bg-orange-600'} w-full inline-block cursor-not-allowed text-center rounded-2xl py-2.5 text-gray-200 mt-1`}>
                        شما یک پلن فعال دارید
                    </span>

                </>) : (<>

                    <button disabled={isLoading} onClick={() => handleBuyPlan('ONLINE')} className={`${planColor === 'GOLD' ? 'dark:bg-amber-500/70 bg-amber-500' : planColor === "SILVER" ? 'dark:bg-neutral-400/70 bg-neutral-400' : 'dark:bg-orange-600/70 bg-orange-600'} w-full rounded-2xl py-2.5 text-white dark:text-gray-200 mt-1`}>
                        {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت آنلاین'}
                    </button>

                    <div className="flex justify-center flex-col items-center">
                        <button disabled={isLoading} onClick={() => setIsShowModal(true)} className={`${planColor === 'GOLD' ? 'dark:bg-amber-500/70 bg-amber-500' : planColor === "SILVER" ? 'dark:bg-neutral-400/70 bg-neutral-400' : 'dark:bg-orange-600/70 bg-orange-600'} w-full rounded-2xl py-2.5 text-white dark:text-gray-200 mt-1`}>
                            {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت با کیف پول'}
                        </button>
                        <div className={`h-10 ${planColor === 'GOLD' ? 'dark:bg-amber-500/50 bg-amber-500/80' : planColor === "SILVER" ? 'dark:bg-neutral-400/50 bg-neutral-400/80' : 'dark:bg-orange-600/50 bg-orange-600/80'} w-2/3 rounded-br-3xl rounded-bl-3xl  flex text-sm gap-x-0.5 items-center justify-center -z-10`}>
                            <p className="text-white dark:text-gray-300">موجودی کیف پول</p>
                            <p className="font-dana-bold text-white dark:text-gray-300">{Math.floor(money).toLocaleString()}</p>
                            <p className="text-white dark:text-gray-300">تومان</p>
                        </div>
                    </div>

                </>)}
            </div>
        </>
    )

}

export default PlanBuyButtons