interface ProductSectionTitleProps {
    title: string
}

const ProductSectionTitle = ({ title }: ProductSectionTitleProps) => {
    return (
        <div className="flex-center flex gap-x-3">
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 inline-block"></span>
            <p className="text-600-400 text-sm">{title}</p>
            <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800 inline-block"></span>
        </div>
    )
}

export default ProductSectionTitle