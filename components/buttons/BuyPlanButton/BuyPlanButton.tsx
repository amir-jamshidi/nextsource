'use client'

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


interface BuyPlanButtonProps {
    isHavPlan: boolean,
    planID: string
}


const BuyPlanButton = ({ isHavPlan, planID }: BuyPlanButtonProps) => {

    const router = useRouter();

    const handleBuyPlan = () => {
        if (isHavPlan) return toast.error('شما پلن فعال دارید');
        router.push(`/p-user/plan/${planID}`)

    }
    return (
        <button disabled={isHavPlan ? true : false} onClick={handleBuyPlan} className={`${isHavPlan ? 'cursor-not-allowed' : ''} bg-blue px-6 py-1.5 rounded-2xl text-gray-200 text-justify`}>خرید پلن</button>
    )
}

export default BuyPlanButton