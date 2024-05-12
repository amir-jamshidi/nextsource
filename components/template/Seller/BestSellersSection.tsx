import SectionTitle from "@/components/shared/SectionTitle"
import SellerItem from "@/components/shared/SellerItem"
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
                    <SellerItem seller={seller} />
                ))}
            </div>
        </div>
    )
}

export default BestSellersSection