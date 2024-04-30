import ProductSectionTitle from "@/components/shared/ProductSectionTitle"
import { IProduct } from "@/types/product"


interface ProductMoreDetailsSectionProps {
    product: IProduct
}

const ProductMoreDetailsSection = ({ product }: ProductMoreDetailsSectionProps) => {
    return (
        <section className="bg-blue px-6 py-6 rounded-xl mt-8">
            <ProductSectionTitle title="جزئیات بیشتر" />
            <div className="mt-4">
                <p className="text-gray-400 text-justify">{product.description}</p>
            </div>
        </section>
    )
}

export default ProductMoreDetailsSection