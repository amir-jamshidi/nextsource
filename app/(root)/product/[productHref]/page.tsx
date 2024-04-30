import { getComments } from '@/actions/comment.action';
import { getProductByHref } from '@/actions/product.action'
import CommentForm from '@/components/forms/CommentForm';
import BreadCrump from '@/components/shared/BreadCrump';
import ProductCommentsSection from '@/components/template/Product/ProductCommentsSection';
import ProductDetailsSection from '@/components/template/Product/ProductDetailsSection';
import ProductLinksSection from '@/components/template/Product/ProductLinksSection';
import ProductMoreDetailsSection from '@/components/template/Product/ProductMoreDetailsSection';
import isAccessToSource from '@/middlewares/isAccessToSource';
import isHavPlan from '@/middlewares/isHavPlan';
import { IProduct } from '@/types/product';
import { IUser } from '@/types/user';
import { notFound } from 'next/navigation';
import React from 'react'



const Product = async ({ params: { productHref } }: { params: { productHref: string } }) => {

    const [product, isHavPlanUser]: [product: IProduct | boolean, isHavPlanUser: boolean | IUser] = await Promise.all([getProductByHref(productHref), isHavPlan()])
    if (!product) return notFound();
    const accessToSource = await isAccessToSource(product._id);

    // const addresses = [
    //     { title: product.title, href: product.href },
    //     { title: product.categoryID[0].title , href : pro}
    // ]

    return (
        <section>
            <div className='container px-6'>
                <BreadCrump />
                <ProductDetailsSection product={product} isHavPlanUser={isHavPlanUser} isAccessToSourceUser={accessToSource} />
                {(isHavPlanUser && product.isPlan) || accessToSource && (
                    <ProductLinksSection product={product} />
                )}
                <ProductMoreDetailsSection product={product} />
                <ProductCommentsSection />
                <CommentForm />
            </div>
        </section>
    )
}

export default Product