import AlertSection from '@/components/template/Main/AlertSection/AlertSection'
import BestSellerSection from '@/components/template/Main/BestSellerSection/BestSellerSection'
import CartSection from '@/components/template/Main/CartSections/CartSection'
import HeroSection from '@/components/template/Main/HeroSection/HeroSection'
import LatestProductsSection from '@/components/template/Main/LatestProducts/LatestProductsSection'
import PopularBackProductsSection from '@/components/template/Main/PopularBackProductsSection/PopularBackProductsSection'
import PopularCategoriesSection from '@/components/template/Main/PopularCategoriesSection/PopularCategoriesSection'
import PopularFrontProductsSection from '@/components/template/Main/PopularFrontProductsSection/PopularFrontProductsSection'
import PopularProductsSection from '@/components/template/Main/PopularProductsSection/PopularProductsSection'
import SocialMedia from '@/components/template/Main/SocialMedia/SocialMedia'
import alertModel from '@/models/alert.module'


const page = async () => {

  // await alertModel.create({
  //   title: 'توجه : ',
  //   body: 'به زودی حالت روز و سایر امکانات در دسترس قرار میگیرد',
  //   isShow: true,
  //   type: 'SUCCESS'
  // })

  return (
    <>
      <div className='container'>
        <AlertSection />
        <HeroSection />
        <LatestProductsSection />
        <BestSellerSection />
        <CartSection />
        <PopularCategoriesSection />
        <PopularProductsSection />
        <SocialMedia />
        <PopularFrontProductsSection />
        <PopularBackProductsSection />
      </div>
    </>
  )
}

export default page