import SectionTitle from "@/components/shared/SectionTitle"
import { ISeller } from "@/types/seller"
import Image from "next/image"

interface BestSellersSectionProps {
    sellers: ISeller[]
}

const BestSellersSection = ({ sellers }: BestSellersSectionProps) => {
    return (
        <div className="mt-8">
            <SectionTitle isShowMore={false} title="برترین فروشنده ها" />
            <div className="grid grid-cols-5 mt-8">
                {sellers.map((seller) => (
                    <div className="h-44 bg-blue-light rounded-xl flex-center">
                        {/* <Image  /> */}
                        <p className="text-gray-200">{seller.userID.fullname}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSellersSection