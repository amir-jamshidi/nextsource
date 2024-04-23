import Image from "next/image"
import Link from "next/link"
const HeroSection = () => {
    return (
        <div className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
                <div className="flex-center flex-col px-6 gap-y-3 order-2 md:order-1">
                    <h2 className="text-center text-xl lg:text-2xl text-800-200 font-morabba-bold">با نکست سورس هر کدی رو که بخوای پیدا میکنی</h2>
                    <p className="text-base lg:text-lg font-morabba-bold text-700-300 text-center">نکست سورس منبع سورس کد در هر زمینه ای هستش ، کافیه هرچیزی رو که میخوای فقط سرچ کنی که پیداش کنی ولذتشو ببری ، به همین راحتی</p>
                    {/* <p className="text-center text-600-400">اگه سورس مورد نظرتو پیدا نکردی اصلا نگران نباش ، به ما درخواستشو بده توی کمترین زمان ممکن سورس رو برات اماده میکنیم و بهت تحویل میدیم و تضمین میکنیم که به بهترین شکل انجامش میدیم ، پس خیالت راحت باشه</p> */}
                    <div className="flex mt-4 gap-x-1">
                        <Link href={`/about-us`} className="bg-button px-4 py-2.5 rounded-full text-gray-200 text-sm">درباره ما</Link>
                        <Link href={`/request`} className="bg-blue px-4 py-2.5 rounded-full text-gray-200 text-sm">درخواست سورس کد</Link>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <Image src={'./assets/hero-img.svg'} width={600} height={600} alt="" priority />
                </div>
            </div>
        </div>
    )
}

export default HeroSection