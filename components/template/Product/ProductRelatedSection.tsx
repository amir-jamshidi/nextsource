'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { useQuery } from 'react-query';
import { getRelatedProducts } from '@/actions/product.action';
import SectionTitle from '@/components/shared/SectionTitle'
import SourceItem from '@/components/shared/SourceItem';

import 'swiper/css';
import 'swiper/css/autoplay';
import NoItemSection from '@/components/shared/NoItemSection';


const ProductRelatedSection = ({ productID }: { productID: string }) => {

    const { data: products = [] } = useQuery(['relatedProduct', productID], () => getRelatedProducts(productID));

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
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                spaceBetween={8}
                modules={[Autoplay]}
                className="mySwiper"
                loop={true}
            >
                {products.length > 0 ? (
                    <>
                        {products?.map((product) => (
                            <SwiperSlide key={product._id} className='overflow-auto'>
                                <div className='pt-12'>
                                    <SourceItem product={product} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                )
                    :
                    (
                        <div className='w-full py-20 md:py-14 px-4 bg-blue-light rounded-2xl mt-6'>
                            <p className='text-sm text-center text-gray-400'>
                                سورس مرتبطی به سورس فعلی پیدا نشد
                            </p>
                        </div>
                    )}

            </Swiper>
        </div >
    );
}

export default ProductRelatedSection