import BestSellerSection from '@/components/template/Main/BestSellerSection/BestSellerSection'
import HeroSection from '@/components/template/Main/HeroSection/HeroSection'
import LatestProductsSection from '@/components/template/Main/LatestProducts/LatestProductsSection'

const page = async () => {
  return (
    <>
      <div className='container'>
        <HeroSection />
        <LatestProductsSection />
        <BestSellerSection />
      </div>
    </>
  )
}

export default page