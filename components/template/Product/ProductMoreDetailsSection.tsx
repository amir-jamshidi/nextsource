import { IProduct } from "@/types/product"


interface ProductMoreDetailsSectionProps {
    product: IProduct
}

const ProductMoreDetailsSection = ({ product }: ProductMoreDetailsSectionProps) => {
    return (
        <section className="bg-blue px-6 py-6 rounded-xl mt-8">
            <div className=""></div>
        </section>
    )
}

export default ProductMoreDetailsSection