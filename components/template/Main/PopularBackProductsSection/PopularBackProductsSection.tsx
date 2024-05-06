import { getPopularBackProducts } from '@/actions/product.action'
import SectionTitle from '@/components/shared/SectionTitle'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IProduct } from '@/types/product'

const PopularBackProductsSection = async () => {
    
    const products = await getPopularBackProducts() as IProduct[];
    
    return (
        <section className='mt-16'>
            <SectionTitle title='محبوب ترین سورس های بک اند' />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem key={product._id} product={product} />
                ))}
            </SourceContainer>
        </section>
    )
}

export default PopularBackProductsSection