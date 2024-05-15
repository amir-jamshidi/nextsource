import { getBestSellerProdcuts } from '@/actions/product.action'
import SectionTitle from '@/components/shared/SectionTitle'
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import { IProduct } from '@/types/product';


const BestSellerSection = async () => {

    const products = await getBestSellerProdcuts() as IProduct[];
    
    return (
        <>
            <SectionTitle title='پرفروش های اخیر' href='/products?filter=bestseller' />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem key={JSON.stringify(product._id)} product={product} />
                ))}
            </SourceContainer>
        </>
    )
}

export default BestSellerSection