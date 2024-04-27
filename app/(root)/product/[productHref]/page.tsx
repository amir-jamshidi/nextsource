import { getProductByHref } from '@/actions/product.action'
import BreadCrump from '@/components/shared/BreadCrump';
import ProductDetailsSection from '@/components/template/Product/ProductDetailsSection';
import { IProduct } from '@/types/product';
import { notFound } from 'next/navigation';
import React from 'react'

const Product = async ({ params: { productHref } }: { params: { productHref: string } }) => {

    const product = await getProductByHref(productHref) as IProduct;
    if (!product) return notFound();

    // const addresses = [
    //     { title: product.title, href: product.href },
    //     { title: product.categoryID[0].title , href : pro}
    // ]

    return (
        <section>
            <div className='container px-6'>
                <BreadCrump />
                <ProductDetailsSection product={product} />
            </div>
        </section>
    )
}

export default Product