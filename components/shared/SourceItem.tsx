import { IProduct } from "@/types/product"
import { DownloadRounded, StarRateRounded } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link";
import OffItem from "./OffItem";
import { ITag } from "@/types/tag";

const SourceItem = ({ product }: { product: IProduct }) => {
   
    return (
        <Link href={`/product/${product.href}`}>
            <div className="bg-blue rounded-xl px-2 py-2">
                <div className="rounded-xl overflow-hidden -mt-8 relative h-44">
                    {product.isPlan && (
                        <span className="absolute bg-blue top-1 right-1 rounded px-2 text-gray-300 z-[4]">
                            <StarRateRounded className="text-amber-500" />
                            <span className="text-xs">دسترسی رایگان برای اعضای ویژه</span>
                        </span>
                    )}
                    {product.isOff && (
                        <OffItem precent={product.precentOff} />
                    )}
                    <Image src={'https://i.postimg.cc/5tW56JvN/istockphoto-1488105061-612x612.jpg'} className="rounded-xl" fill={true} style={{ objectFit: 'cover' }} alt="" />
                </div>
                <div className="flex-center mt-2">
                    <p className="text-800-200 text-sm">{product.title}</p>
                </div>
                <div className="px-2 mt-1">
                    <p className="text-600-400 text-sm text-justify line-clamp-2">{product.description}</p>
                    <div className=" mt-2 mb-1.5 rounded bg-blsue flex gap-x-0.5">
                        {product.tags && (<>
                            {product.tags.slice(0, 3).map((tag: ITag) => (
                                <span className="text-xs bg-gray-800/90 rounded-xl px-1.5 text-gray-300" key={JSON.parse(JSON.stringify(tag._id))}>{tag.title}</span>
                            ))}
                        </>)}
                    </div>
                </div>
                <div className="mt-2 pt-2 mb-1 border-t border-t-gray-700/40 mx-3 flex justify-between">
                    <div className="flex items-center">
                        <span>
                            <DownloadRounded fontSize="small" className="text-blue-500" />
                        </span>
                        <p className="font-dana text-700-300 text-sm pt-0.5">{product.buyCount}</p>
                    </div>
                    <div className="flex items-center gap-x-0.5">
                        {product.isFree && (
                            <>
                                <p className="font-dana text-green-500 line-through">{Number(product.price).toLocaleString()}</p>
                                <p className="text-red-500">رایگان</p></>
                        )}
                        {!product.isFree && !product.isOff && (
                            <>
                                <p className="font-dana text-green-500">{Number(product.price).toLocaleString()}</p>
                                <p className="text-green-500">تومان</p>
                            </>)}
                        {product.isOff && !product.isFree && (
                            <>
                                <p className="font-dana text-red-500 line-through text-xs">{Number(product.price).toLocaleString()}</p>
                                <p className="font-dana text-green-500">{Math.round(Number(product.price) - Number((product.price * product.precentOff) / 100)).toLocaleString()}</p>
                                <p className="text-green-500">تومان</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default SourceItem