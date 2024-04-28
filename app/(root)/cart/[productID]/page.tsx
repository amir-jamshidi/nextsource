import { getProductByID } from '@/actions/product.action'
import ProductDetailsCartSection from '@/components/template/Cart/ProductDetailsCartSection';
import isAccessToSource from '@/middlewares/isAccessToSource';
import isHavPlan from '@/middlewares/isHavPlan';
import { IProduct } from '@/types/product';



const page = async ({ params: { productID } }: { params: { productID: string } }) => {

    const [product, accessToSource, isHavPlanUser]: [product: IProduct, isAccessToSourceUser: boolean, isHavPlanUser: boolean] = await Promise.all([getProductByID(productID), isAccessToSource(productID), isHavPlan()]);
    const isAccessToSourceUser = (product.isPlan && accessToSource) || accessToSource;



    return (
        <section>
            <div className='container px-6'>
                <div className='flex-center'>
                    <ProductDetailsCartSection product={product} isAccessToSourceUser={isAccessToSourceUser} />
                </div>
            </div>
        </section>
    )
}

export default page