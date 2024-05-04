import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import TagItem from "@/components/shared/TagItem"
import { IProduct } from "@/types/product"
import { ITag } from "@/types/tag"


interface ProductMoreDetailsSectionProps {
    product: IProduct
}

const ProductMoreDetailsSection = ({ product }: ProductMoreDetailsSectionProps) => {
    return (
        <section className="bg-blue px-4 py-6 rounded-xl mt-8">
            <ProductSectionTitle title="جزئیات بیشتر" />
            <div className="bg-gray-800/30 mt-4 px-4 py-4 rounded-xl">
                <div className="">
                    <p className="text-gray-400 text-justify">{product.description}</p>
                </div>
            </div>
            <div className='flex items-center mt-4 gap-x-1'>
                <p className='text-gray-300 text-sm'>تکنولوژی های استفاده شده : </p>
                <div className='flex items-center gap-x-1 text-sm'>
                    {product.tags.map((tag: ITag) => (
                        <TagItem key={tag._id} tag={tag} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductMoreDetailsSection