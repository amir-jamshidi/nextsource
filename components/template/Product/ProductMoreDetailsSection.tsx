import CategorySmalItem from "@/components/shared/CategorySmalItem"
import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import TagItem from "@/components/shared/TagItem"
import { ICategory } from "@/types/category"
import { IProduct } from "@/types/product"
import { ITag } from "@/types/tag"

interface ProductMoreDetailsSectionProps {
    product: IProduct
}

const ProductMoreDetailsSection = ({ product }: ProductMoreDetailsSectionProps) => {

    const category = product.categoryID as ICategory

    return (
        <section className="bg-blue md:px-6 md:py-6 px-3 py-4 rounded-xl mt-8 border-section">
            <ProductSectionTitle title="جزئیات بیشتر" />
            <div className="bg-gray-100 dark:bg-gray-800/30 border border-transparent dark:border-gray-700/30 mt-4 px-4 py-4 rounded-xl">
                <div className="">
                    <p className="text-600-400 text-justify text-sm md:text-base">{product.description}</p>
                </div>
            </div>
            <div className='flex items-center mt-4 gap-x-1 px-2'>
                <p className='text-600-400 text-sm hidden lg:flex'>تکنولوژی های استفاده شده : </p>
                <p className='text-600-400 text-sm lg:hidden flex'>تکنولوژی ها : </p>
                <div className='flex flex-wrap items-center gap-x-1 text-sm'>
                    {product.tags.map((tag: ITag) => (
                        <TagItem key={tag._id} tag={tag} />
                    ))}
                </div>
            </div>
            <div className=''>
                <CategorySmalItem category={category} />
            </div>
        </section>
    )
}

export default ProductMoreDetailsSection