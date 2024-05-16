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

    console.log(isHavPlan);

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
        } catch (error) {
            throw new Error('خطای ناشناخته')
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <>
            <Modal isShow={isShowModal}>
                <h3 className="text-center text-xl text-gray-200">پرداخت با کیف پول انجام بشه ؟</h3>
                <p className="text-center mt-4 text-gray-300">مطمئنی که میخوای پلن رو با موجودی کیف پولت پرداخت کنی ؟</p>
                <div className="flex-center mt-4 gap-x-1">
                    <button onClick={() => handleBuyPlan('WALLET')} className="bg-green-500/60 rounded-full text-sm text-gray-100 px-2 py-1.5">اره پرداخت میکنم</button>
                    <button onClick={() => setIsShowModal(false)} className="bg-red-500/60 rounded-full text-sm text-gray-100 px-2 py-1.5">نه نمیخوام</button>
                </div>
            </Modal>

            <div className="flex flex-col">

                {isHavPlan ? (<>

                    <span className={`${planColor === 'GOLD' ? 'bg-amber-500/70' : planColor === "SILVER" ? 'bg-neutral-400/70' : 'bg-orange-600/70'} w-96 inline-block cursor-not-allowed text-center rounded-2xl py-2.5 text-gray-200 mt-1`}>
                        شما یک پلن فعال دارید
                    </span>

                </>) : (<>

                    <button disabled={isLoading} onClick={() => handleBuyPlan('ONLINE')} className={`${planColor === 'GOLD' ? 'bg-amber-500/70' : planColor === "SILVER" ? 'bg-neutral-400/70' : 'bg-orange-600/70'} w-96 rounded-2xl py-2.5 text-gray-200 mt-1`}>
                        {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت آنلاین'}
                    </button>

                    <div className="flex justify-center flex-col items-center">
                        <button disabled={isLoading} onClick={() => setIsShowModal(true)} className={`${planColor === 'GOLD' ? 'bg-amber-500/70' : planColor === "SILVER" ? 'bg-neutral-400/70' : 'bg-orange-600/70'} w-96 rounded-2xl py-2.5 text-gray-200 mt-1`}>
                            {isLoading ? 'لطفا صبر کنید ...' : 'پرداخت با کیف پول'}
                        </button>
                        <div className={`h-10 ${planColor === 'GOLD' ? 'bg-amber-500/50' : planColor === "SILVER" ? 'bg-neutral-400/50' : 'bg-orange-600/50'} w-2/3 rounded-br-3xl rounded-bl-3xl  flex text-sm gap-x-0.5 items-center justify-center -z-10`}>
                            <p className="text-gray-300">موجودی کیف پول</p>
                            <p className="font-dana-bold text-gray-300">{Math.floor(money).toLocaleString()}</p>
                            <p className="text-gray-300">تومان</p>
                        </div>
                    </div>

                </>)}
            </div>
        </>
    )

}

export default PlanBuyButtons