import { getCommentsCount } from '@/actions/comment.action';
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
import CommentMoreButton from '@/components/buttons/CommentMoreButton/CommentMoreButton';
import { ICategory } from '@/types/category';
import ProductDetailsCarts from '@/components/template/Product/ProductDetailsCarts';



const Product = async ({ params: { productHref }, searchParams: { comments } }: { params: { productHref: string }, searchParams: { comments: string } }) => {

    const [product, isLoginUser, isHavPlanUser]: [product: IProduct | boolean, isLoginUser: boolean | IUser, isHavPlanUser: boolean | IUser] = await Promise.all([getProductByHref(productHref), isLogin(), isHavPlan()])
    if (!product) return notFound();
    const [accessToSource, isHasToFav, commentsCount]: [accessToSource: boolean, isHasToFav: boolean, commentsCount: number] = await Promise.all([isAccessToSource(product._id), isHasToFavorite(product._id), getCommentsCount(product._id)]);
    const commentPage = comments || '1'

    const category = product.categoryID as ICategory
    const addresses = [{ title: category.title, href: `/category/${category.href}` }, { title: product.title, href: `/product/${product.href}` }]
    

    return (
        <section>
            <div className='container px-3 md:px-6'>
                <BreadCrump addresses={addresses} />
                <ProductDetailsSection commentsCount={commentsCount} isHasToFav={isHasToFav} product={product} isHavPlanUser={isHavPlanUser} isAccessToSourceUser={accessToSource} />
                <ProductDetailsCarts commentsCount={commentsCount} product={product} />
                {(isHavPlanUser && product.isPlan) || accessToSource && (<ProductLinksSection product={product} />)}
                <ProductMoreDetailsSection product={product} />
                <ProductCommentsSection productID={JSON.parse(JSON.stringify(product._id))} comment={commentPage} rate={product.rate} commnetsCount={commentsCount} >
                    <CommentMoreButton commentsCount={commentsCount} params={productHref} commentPage={Number(commentPage)} />
                </ProductCommentsSection>
                <CommentForm isLoginUser={isLoginUser} productID={JSON.parse(JSON.stringify(product._id))} />
                <ProductRelatedSection productID={JSON.parse(JSON.stringify(product._id))} />
            </div>
        </section >
    )
}

export default Product 