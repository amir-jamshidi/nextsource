import { getLatestProducts } from "@/actions/product.action"
import SctionTitle from "@/components/shared/SctionTitle"
import SourceItem from "@/components/shared/SourceItem"
import categoryModel from "@/models/category.module"
import productModel from "@/models/product.module"
import { IProduct } from "@/types/product"



const LatestProductsSection = async () => {

  // await productModel.create({
  //   title: 'سورس نکست فود',
  //   description: 'نکست فود یه وبسایت فروشگاهیه که شما به راحتی میتونین سفارش های خودتونو ثبت کنید و طبق آدرس شما سفارش ها به دستتون میرسه ، نکست فود یه فروشگاه سفارش آنلاین غذا هست',
  //   categoryID: ['6628057d2c35f0dd2dae0afc', '6628051d2c35f0dd2dae0af0'],
  //   creatorID: '6626d29fc0b0bc0e5d4cc09d',
  //   price: 1450000,
  //   href: 'next-food',
  //   isPlan: true,
  //   isOff: false,
  //   photo: 'a',
  //   size: 14,
  //   isFree: false,
  //   links: ['next-food-download']
  // })

  const products = await getLatestProducts() as [IProduct];



  return (
    <div className="mb-20">
      <SctionTitle title="جدیدترین سورس ها" />
      <div className="grid grid-cols-4 pt-16 gap-y-10 gap-x-2">
        {products.map(product => (
          <SourceItem key={JSON.stringify(product._id)} product={product} />
        ))}
      </div>
    </div>
  )
}

export default LatestProductsSection