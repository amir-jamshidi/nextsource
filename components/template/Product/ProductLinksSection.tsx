import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import { IProduct } from "@/types/product"
import { InsertLinkRounded } from "@mui/icons-material"

interface ProductLinksSectionProps {
    product: IProduct
}

const ProductLinksSection = ({ product }: ProductLinksSectionProps) => {
    return (
        <section className="bg-blue md:px-6 md:py-6 px-3 py-4 rounded-xl mt-8 border-section">
            <ProductSectionTitle title='لینک های دانلود' />
            <div className="mt-4 flex flex-col gap-1 text-sm md:text-base">
                {product.links.map((link, i) => (
                    <div key={link} className="border h-14 border-transparent dark:border-gray-700/30 dark:bg-gray-800/30 bg-gray-100 px-3 py-2 rounded-xl flex justify-between items-center hover:bg-gray-800/70 transition-colors">
                        <div className="flex gap-x-1 text-700-300">
                            <span>
                                <InsertLinkRounded className="text-gray-400" />
                            </span>
                            <p className="">لینک دانلود</p>
                            <span className="font-dana-bold">{i + 1}</span>
                        </div>
                        <div>
                            <a href={link} target="_blank" className="bg-button inline-block px-3 py-2 rounded-full text-gray-100 dark:text-gray-300">دانلود سورس</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductLinksSection