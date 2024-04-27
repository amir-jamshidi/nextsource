import { getProductByHref } from '@/actions/product.action'
import BreadCrump from '@/components/shared/BreadCrump';
import ProductCommentsSection from '@/components/template/Product/ProductCommentsSection';
import ProductDetailsSection from '@/components/template/Product/ProductDetailsSection';
import ProductMoreDetailsSection from '@/components/template/Product/ProductMoreDetailsSection';
import isHavPlan from '@/middlewares/isHavPlan';
import { IProduct } from '@/types/product';
import { IUser } from '@/types/user';
import { notFound } from 'next/navigation';
import React from 'react'



const Product = async ({ params: { productHref } }: { params: { productHref: string } }) => {

    const [product, isHavPlanUser]: [product: IProduct, isHavPlanUser: boolean | IUser] = await Promise.all([getProductByHref(productHref), isHavPlan()])

    if (!product) return notFound();


    // const addresses = [
    //     { title: product.title, href: product.href },
    //     { title: product.categoryID[0].title , href : pro}
    // ]

    return (
        <section>
            <div className='container px-6'>
                <BreadCrump />
                <ProductDetailsSection product={product} isHavPlanUser={isHavPlanUser} />
                <ProductMoreDetailsSection product={product} />
                <ProductCommentsSection />
            </div>
        </section>
    )
}

export default Product