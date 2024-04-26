import BestSellerSection from '@/components/template/Main/BestSellerSection/BestSellerSection'
import CartSection from '@/components/template/Main/CartSections/CartSection'
import HeroSection from '@/components/template/Main/HeroSection/HeroSection'
import LatestProductsSection from '@/components/template/Main/LatestProducts/LatestProductsSection'
import PopularCategoriesSection from '@/components/template/Main/PopularCategoriesSection/PopularCategoriesSection'
import PopularProductsSection from '@/components/template/Main/PopularProductsSection/PopularProductsSection'
import SocialMedia from '@/components/template/Main/SocialMedia/SocialMedia'

const page = async () => {
  return (
    <>
      <div className='container'>
        <HeroSection />
        <LatestProductsSection />
        <BestSellerSection />
        <CartSection />
        <PopularCategoriesSection />
        <PopularProductsSection />
        <SocialMedia />
      </div>
    </>
  )
}

export default page