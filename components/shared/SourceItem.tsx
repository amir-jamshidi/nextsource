import { StarRateRounded } from "@mui/icons-material"
import Image from "next/image"

const SourceItem = () => {
    return (
        <div className="bg-blue rounded-xl px-2 py-2">
            <div className="rounded-xl overflow-hidden -mt-8">
                <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} width={300} height={300} style={{ objectFit: 'contain' }} alt="" />
            </div>
            <div className="flex-center mt-2">
                <p className="text-800-200 text-sm">سورس کد دیجیکالا</p>
            </div>
            <div className="px-2 mt-1">
                <p className="text-600-400 text-sm text-justify line-clamp-2">سورس کد سایت دیجیکالا به صورت فول استک هم فرانت اند و هم بک اند به صورت کامل توسعه داده شده و با جدیدترین سینتکس هست </p>
            </div>
            <div className="mt-2 pt-1 border-t border-t-gray-700/40 mx-3 flex justify-between">
                <div className="flex items-center">
                    <span>
                        <StarRateRounded className="text-amber-500" />
                    </span>
                    <p className="font-dana text-amber-500 text-sm pt-1">4.5</p>
                </div>
                <div className="flex items-center gap-x-0.5">
                    <p className="font-dana text-green-500">218,000</p>
                    <p className="text-green-500">تومان</p>
                </div>
            </div>
        </div>
    )
}

export default SourceItem