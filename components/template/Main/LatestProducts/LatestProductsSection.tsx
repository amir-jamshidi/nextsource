import { getLatestProducts } from "@/actions/product.action"
import SctionTitle from "@/components/shared/SctionTitle"
import SourceContainer from "@/components/shared/SourceContainer"
import SourceItem from "@/components/shared/SourceItem"
import categoryModel from "@/models/category.module"
import productModel from "@/models/product.module"
import { IProduct } from "@/types/product"



const LatestProductsSection = async () => {

  // await categoryModel.create({
  //   title: 'پی دبیلو ای ',
  //   titleEn: 'PWA',
  //   caption: 'pwa ...',
  //   type: 'front',
  //   href: 'pwa'
  // })

  // await productModel.create({
  //   title: 'سورس فروشگاه آموزشی',
  //   description: 'توی این سورس تمامی قابلیت های یک فروشگاه آنلاین آموزشی وجود داره همینطور قابلیت خرید اشتراک ویژه هم در این سورس پیاده سازی شده و کاملا در دنیای واقعی کاربرد دارد',
  //   categoryID: ['662804e12c35f0dd2dae0aeb', '6628051d2c35f0dd2dae0af0', '662805502c35f0dd2dae0af4'],
  //   creatorID: '6626d29fc0b0bc0e5d4cc09d',
  //   price: 2100000,
  //   href: 'online-learn-shop',
  //   isPlan: true,
  //   isOff: true,
  //   percentOff: 35,
  //   photo: 'a',
  //   size: 16,
  //   isFree: false,
  //   links: ['next-food-download']
  // })

  const products = await getLatestProducts() as [IProduct];



  return (
    <section className="mb-16">
      <SctionTitle title="جدیدترین سورس ها" />
      <SourceContainer>
        {products.map(product => (
          <SourceItem key={JSON.stringify(product._id)} product={product} />
        ))}
      </SourceContainer>
    </section>
  )
}

export default LatestProductsSection