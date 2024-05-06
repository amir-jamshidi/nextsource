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
        <section className="bg-blue md:px-6 md:py-6 px-3 py-4 rounded-xl mt-8">
            <ProductSectionTitle title="جزئیات بیشتر" />
            <div className="bg-gray-800/30 mt-4 px-4 py-4 rounded-xl">
                <div className="">
                    <p className="text-gray-400 text-justify text-sm md:text-base">{product.description}</p>
                </div>
            </div>
            <div className='flex items-center mt-4 gap-x-1'>
                <p className='text-gray-300 text-sm hidden lg:flex'>تکنولوژی های استفاده شده : </p>
                <p className='text-gray-300 text-sm lg:hidden flex'>تکنولوژی ها : </p>
                <div className='flex flex-wrap items-center gap-x-1 text-sm'>
                    {product.tags.map((tag: ITag) => (
                        <TagItem key={tag._id} tag={tag} />
                    ))}
                </div>
            </div>
            <div className='flex items-center mt-4 gap-x-1'>
                <p className='text-gray-300 text-sm'>دسته بندی : </p>
                <p className="text-sm bg-amber-500 rounded px-2 text-white">{category.title}</p>
            </div>
        </section>
    )
}

export default ProductMoreDetailsSection