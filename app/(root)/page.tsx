import HeroSection from '@/components/template/Main/HeroSection/HeroSection'
import LatestProductsSection from '@/components/template/Main/LatestProducts/LatestProductsSection'

const page = async () => {
  return (
    <>
      <div className='container'>
        <HeroSection />
        <LatestProductsSection/>
      </div>
    </>
  )
}

export default page