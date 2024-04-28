import { getProductByID } from '@/actions/product.action'
import ProductDetailsCartSection from '@/components/template/Cart/ProductDetailsCartSection';
import isAccessToSource from '@/middlewares/isAccessToSource';
import isHavPlan from '@/middlewares/isHavPlan';
import isLogin from '@/middlewares/isLogin';
import { IProduct } from '@/types/product';
import { notFound } from 'next/navigation';



const page = async ({ params: { productID } }: { params: { productID: string } }) => {

    //Check User Login
    const isLoginUser = await isLogin();
    if (!isLoginUser) return notFound();

    //Get Data
    const [product, accessToSource, isHavPlanUser]: [product: IProduct | boolean, isAccessToSourceUser: boolean, isHavPlanUser: boolean] = await Promise.all([getProductByID(productID), isAccessToSource(productID), isHavPlan()]);
    if (!product) return notFound();
    const isAccessToSourceUser = (product.isPlan && isHavPlanUser) || accessToSource;

    return (
        <section>
            <div className='container px-6'>
                <div className='flex-center h-cart'>
                    <ProductDetailsCartSection product={product} isAccessToSourceUser={isAccessToSourceUser} />
                </div>
            </div>
        </section>
    )
}

export default page