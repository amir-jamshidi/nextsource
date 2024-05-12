import { getPopularFrontProducts } from '@/actions/product.action'
import SectionTitle from '@/components/shared/SectionTitle'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IProduct } from '@/types/product'


const PopularFrontProductsSection = async () => {

    const products = await getPopularFrontProducts() as IProduct[];

    return (
        <section className='mt-16'>
            <SectionTitle title='محبوب ترین سورس های فرانت اند' href='/category/front-end?filter=popular' />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem key={JSON.stringify(product._id)} product={product} />
                ))}
            </SourceContainer>
        </section>
    )
}

export default PopularFrontProductsSection