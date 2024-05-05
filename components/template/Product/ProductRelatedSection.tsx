'use client'
import SctionTitle from '@/components/shared/SctionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useQuery } from 'react-query';
import { getRelatedProducts } from '@/actions/product.action';
import SourceItem from '@/components/shared/SourceItem';
import { IProduct } from '@/types/product';
const ProductRelatedSection = ({ productID }: { productID: string }) => {

    const { data: products } = useQuery(['relatedProduct', productID], () => getRelatedProducts(productID));



    return (
        <div className='w-full mt-6'>
            <SctionTitle title='سورس های مرتبط' isShowMore={false} />
            <Swiper
                breakpoints={{

                    640: {
                       
                        slidesPerView: 1,
                        spaceBetween: 10
                    },

                    768: {
                        
                        slidesPerView: 2,
                        spaceBetween: 10

                    },
                    1024: {
                    
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    1280: {
                     
                        slidesPerView: 4,
                        spaceBetween: 10
                    }
                }}
                spaceBetween={10}
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