import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import { IProduct } from "@/types/product"

interface ProductLinksSectionProps {
    product: IProduct
}

const ProductLinksSection = ({ product }: ProductLinksSectionProps) => {
    return (
        <section className="bg-blue px-6 py-6 rounded-xl mt-8">
            <ProductSectionTitle title='لینک های دانلود' />
            <div className="mt-4 flex flex-col gap-1">
                {product.links.map((link, i) => (
                    <div key={link} className="bg-gray-800/30 px-3 py-2 rounded-xl flex justify-between items-center">
                        <div className="flex gap-x-1 text-gray-300">
                            <p>لینک دانلود</p>
                            <span className="font-dana-bold">{i + 1}</span>
                        </div>
                        <div>
                            <a href={link} target="_blank" className="bg-blue inline-block px-3 py-2 rounded-full text-gray-300">دانلود سورس</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductLinksSection