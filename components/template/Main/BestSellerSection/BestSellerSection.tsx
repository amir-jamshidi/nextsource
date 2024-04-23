import { getBestSellerProdcuts } from '@/actions/product.action'
import SctionTitle from '@/components/shared/SctionTitle'
import SourceContainer from '@/components/shared/SourceContainer';
import SourceItem from '@/components/shared/SourceItem';
import { IProduct } from '@/types/product';


const BestSellerSection = async () => {

    const products = await getBestSellerProdcuts() as IProduct[];

    return (
        <>
            <SctionTitle title='پرفروش های اخیر' />
            <SourceContainer>
                {products.map(product => (
                    <SourceItem key={JSON.stringify(product._id)} product={product} />
                ))}
            </SourceContainer>
        </>
    )
}

export default BestSellerSection