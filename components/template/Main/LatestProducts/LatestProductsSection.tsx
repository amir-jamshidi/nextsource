import { getLatestProducts } from "@/actions/product.action"
import SectionTitle from "@/components/shared/SectionTitle"
import SourceContainer from "@/components/shared/SourceContainer"
import SourceItem from "@/components/shared/SourceItem"
import { IProduct } from "@/types/product"

const LatestProductsSection = async () => {

  const products = await getLatestProducts() as IProduct[];

  return (
    <section className="mb-16">
      <SectionTitle title="جدیدترین سورس ها" />
      <SourceContainer>
        {products.map(product => (
          <SourceItem key={JSON.stringify(product._id)} product={product} />
        ))}
      </SourceContainer>
    </section>
  )
}

export default LatestProductsSection