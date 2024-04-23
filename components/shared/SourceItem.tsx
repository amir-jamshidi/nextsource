import { IProduct } from "@/types/product"
import { DownloadRounded, StarRateRounded } from "@mui/icons-material"
import Image from "next/image"

const SourceItem = ({ product }: { product: IProduct }) => {
    return (
        <div className="bg-blue rounded-xl px-2 py-2">
            <div className="rounded-xl overflow-hidden -mt-8 relative">
                {product.isPlan && (
                    <span className="absolute bg-blue top-1 right-1 rounded px-2 text-gray-300">
                        <StarRateRounded className="text-amber-500" />
                        <span className="text-xs">دسترسی رایگان برای اعضای ویژه</span>
                    </span>
                )}
                <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} width={300} height={300} style={{ objectFit: 'contain' }} alt="" />
            </div>
            <div className="flex-center mt-2">
                <p className="text-800-200 text-sm">{product.title}</p>
            </div>
            <div className="px-2 mt-1">
                <p className="text-600-400 text-sm text-justify line-clamp-2">{product.description}</p>
                {/* <div className="flex gap-x-0.5 py-2 flex-center">
                    <span className="py-1 rounded bg-blue text-xs px-1 text-gray-500">نکست جی اس</span>
                    <span className="py-1 rounded bg-blue text-xs px-1 text-gray-500">نود جی اس</span>
                    <span className="py-1 rounded bg-blue text-xs px-1 text-gray-500">تیلویند</span>
                </div> */}
            </div>
            <div className="mt-2 pt-2 mb-1 border-t border-t-gray-700/40 mx-3 flex justify-between">
                <div className="flex items-center">
                    <span>
                        <DownloadRounded fontSize="small" className="text-blue-500" />
                    </span>
                    <p className="font-dana text-700-300 text-sm pt-0.5">{product.buyCount}</p>
                </div>
                <div className="flex items-center gap-x-0.5">
                    <p className="font-dana text-green-500">{Number(product.price).toLocaleString()}</p>
                    <p className="text-green-500">تومان</p>
                </div>
            </div>
        </div>
    )
}

export default SourceItem