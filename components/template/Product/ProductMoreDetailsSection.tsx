import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import { IProduct } from "@/types/product"


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
        </section>
    )
}

export default ProductMoreDetailsSection