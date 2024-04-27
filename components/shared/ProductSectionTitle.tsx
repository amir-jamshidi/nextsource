
interface ProductSectionTitleProps {
    title: string
}

const ProductSectionTitle = ({ title }: ProductSectionTitleProps) => {
    return (
        <div className="flex-center ">
            <p className="text-gray-300">{title}</p>
        </div>
    )
}

export default ProductSectionTitle