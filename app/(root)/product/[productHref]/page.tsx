import { getProductByHref } from '@/actions/product.action'
import BreadCrump from '@/components/shared/BreadCrump';
import { IProduct } from '@/types/product';
import { notFound } from 'next/navigation';
import React from 'react'

const Product = async ({ params: { productHref } }: { params: { productHref: string } }) => {

    const product = await getProductByHref(productHref) as IProduct;
    if (!product) return notFound();


    return (
        <section>
            <div className='container'>

                <BreadCrump />

            </div>
        </section>
    )
}

export default Product