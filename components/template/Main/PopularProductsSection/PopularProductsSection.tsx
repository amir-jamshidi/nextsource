import { getPopularProducts } from '@/actions/product.action'
import SectionTitle from '@/components/shared/SectionTitle'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IProduct } from '@/types/product'

const PopularProductsSection = async () => {

    const products = await getPopularProducts() as IProduct[];

    return (
        <section className='mt-16'>
            <SectionTitle title='محبوب ترین سورس های اخیر' />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem key={JSON.stringify(product._id)} product={product} />
                ))}
            </SourceContainer>
        </section>
    )
}

export default PopularProductsSection