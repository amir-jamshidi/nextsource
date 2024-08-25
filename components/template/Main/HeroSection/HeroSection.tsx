import Image from "next/image"
import Link from "next/link"
import RequestButton from "../../../shared/RequestButton"
import isLogin from "@/middlewares/isLogin"

const HeroSection = async () => {

    const isLoginUser = await isLogin();

    return (
        <div className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
                <div className="flex-center flex-col px-6 gap-y-3 order-2 md:order-1">
                    <h2 className="text-center text-xl lg:text-2xl text-700-300 font-morabba-bold">با نکست سورس هر کدی رو که بخوای پیدا میکنی</h2>
                    <p className="text-base lg:text-lg font-morabba-bold text-600-400 text-center">نکست سورس منبع سورس کد در هر زمینه ای هستش ، کافیه هرچیزی رو که میخوای فقط سرچ کنی که پیداش کنی ولذتشو ببری ، به همین راحتی</p>
                    <div className="flex mt-4 gap-x-1">
                        <Link href={`/about-us`} className="bg-button px-4 py-2.5 rounded-full text-gray-200 text-sm">درباره ما</Link>
                        <RequestButton title="درخواست سورس" href="/p-user/requests" isLoginUser={JSON.parse(JSON.stringify(isLoginUser))} />
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