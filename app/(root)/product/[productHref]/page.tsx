import { getComments } from '@/actions/comment.action';
import { getProductByHref } from '@/actions/product.action'
import CommentForm from '@/components/forms/CommentForm';
import BreadCrump from '@/components/shared/BreadCrump';
import ProductCommentsSection from '@/components/template/Product/ProductCommentsSection';
import ProductDetailsSection from '@/components/template/Product/ProductDetailsSection';
import ProductLinksSection from '@/components/template/Product/ProductLinksSection';
import ProductMoreDetailsSection from '@/components/template/Product/ProductMoreDetailsSection';
import ProductRelatedSection from '@/components/template/Product/ProductRelatedSection';
import isAccessToSource from '@/middlewares/isAccessToSource';
import isHavPlan from '@/middlewares/isHavPlan';
import { IProduct } from '@/types/product';
import { IUser } from '@/types/user';
import { notFound } from 'next/navigation';
import React from 'react'
import isLogin from '@/middlewares/isLogin';
import isHasToFavorite from '@/middlewares/isHasToFavorite';
import Link from 'next/link';



const Product = async ({ params: { productHref }, searchParams: { comments } }: { params: { productHref: string }, searchParams: { comments: string } }) => {


    const [product, isLoginUser, isHavPlanUser]: [product: IProduct | boolean, isLoginUser: boolean | IUser, isHavPlanUser: boolean | IUser] = await Promise.all([getProductByHref(productHref), isLogin(), isHavPlan()])
    if (!product) return notFound();
    const [accessToSource, isHasToFav]: [accessToSource: boolean, isHasToFav: boolean] = await Promise.all([isAccessToSource(product._id), isHasToFavorite(product._id)]);

    const commentPage = comments || '1'

    // const addresses = [
    //     { title: product.title, href: product.href },
    //     { title: product.categoryID[0].title , href : pro}
    // ]

    return (
        <section>
            <div className='container px-6'>
                <BreadCrump />
                <ProductDetailsSection isHasToFav={isHasToFav} product={product} isHavPlanUser={isHavPlanUser} isAccessToSourceUser={accessToSource} />
                {(isHavPlanUser && product.isPlan) || accessToSource && (
                    <ProductLinksSection product={product} />
                )}
                <ProductMoreDetailsSection product={product} />
                <ProductRelatedSection />
                <ProductCommentsSection productID={product._id} comment={commentPage} />
                <CommentForm isLoginUser={isLoginUser} productID={JSON.parse(JSON.stringify(product._id))} />

                <Link scroll={false} href={`/product/${productHref}?comments=2`}>Comments</Link>
            </div>
        </section >
    )
}

export default Product