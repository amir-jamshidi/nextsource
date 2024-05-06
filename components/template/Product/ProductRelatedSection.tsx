'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';
import { getRelatedProducts } from '@/actions/product.action';
import SectionTitle from '@/components/shared/SectionTitle'
import SourceItem from '@/components/shared/SourceItem';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductRelatedSection = ({ productID }: { productID: string }) => {

    const { data: products } = useQuery(['relatedProduct', productID], () => getRelatedProducts(productID));

    return (
        <div className='w-full mt-6'>
            <SectionTitle title='سورس های مرتبط' isShowMore={false} />
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 8
                    },
                    1024: {

                        slidesPerView: 4,
                        spaceBetween: 8
                    },
                    1280: {

                        slidesPerView: 4,
                        spaceBetween: 8
                    }
                }}
                spaceBetween={8}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {products?.map((product) => (
                    <SwiperSlide key={product._id} className='overflow-auto'>
                        <div className='pt-12'>
                            <SourceItem product={product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}

export default ProductRelatedSection