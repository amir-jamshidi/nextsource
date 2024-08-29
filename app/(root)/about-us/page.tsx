import PageTitle from "@/components/shared/PageTitle"
import AboutUSImg from '@/public/assets/about.svg'
import Image from "next/image"


export const metadata = {
    title: 'نکست سورس | درباره ما'
}

const About = () => {

    return (
        <div className="container">
            <PageTitle title="دربــاره ما" titleEn="About Us" />
            <div className="w-full bg-blue border-section p-4 rounded-xl mt-8">
                <div className="relative md:h-80 h-44 flex-center w-full mt-8">
                    <Image src={AboutUSImg} alt="About Image" fill={true} />
                </div>
                <div className="bg-blue-light border border-transparent dark:border-gray-700/30 p-4 rounded-xl mt-8 mb-4">
                    <h1 className="text-xl text-700-300 text-center">نکستــــ ســـورس</h1>
                    <div className="flex flex-col text-gray-300 mt-8 divide-y divide-gray-200 dark:divide-gray-700/30 text-sm">
                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full mt-1 shrink-0"></span>
                            <p className="text-justify text-600-400">نکست سورس یه بستر رو اماده کرده که شما به هر سورسی که دلتون میخواد دسترسی داشته باشید . نکست سورس این تضمین رو میده که از جدید ترین تکنولوژی ها استفاده میکنه و شما به راحتی متونید روش حساب باز کنید</p>
                        </div>

                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full  shrink-0"></span>
                            <p className="text-justify text-600-400">شما اگه نیاز به یه سورس کد دارید که اون سورس کد رو پیدا نمیکنید میتونید از پنل کاربری حودتون یه درخواست سورس ثبت کنید و مبلغ پیشنهادی و همینطور جزییات سورس مد نظر رو بفرستید و در اولین فرصت ما به شما پاسخ میدیم</p>
                        </div>

                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full mt-1 shrink-0"></span>
                            <p className="text-justify text-600-400">اگه فکر میکنی کارت خوبه و توی کارت تخصص داری میتونی از طریق پنل کاربری یه درخواست فروشنده شدن رو بفرستی و سورس کد های خودتو با نظارت بفروشی . بعد از ثبت درخواست ما خیلی زود بهت زنگ میزنیم </p>
                        </div>

                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full mt-1 shrink-0"></span>
                            <p className="text-justify text-600-400">اگه سورسی رو تهیه کردید و به هر شکلی مشکل داشت میتونید با پشتیبانی درمیون بزارید و مشکلتون رو بلافاصله حل کنید یا درغیر این صورت میتونید تمام هزینه خودتونو پس بگیرید</p>
                        </div>

                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full mt-1 shrink-0"></span>
                            <p className="text-justify text-600-400">توجه داشته باشید این اپلیکیشن فعلا در مرحله تست و آزمایشه و احتمالا باگ هایی داره ، درصورتی که باگی رو دیدید میتونید اونو از طریق تیکت گزارش بدید و مبلغی رو به عنوان هدیه به کیف پولتون واریز میکنیم </p>
                        </div>

                        <div className="flex items-start gap-x-2 py-2">
                            <span className="bg-amber-500 w-2.5 h-2.5 inline-block rounded-full mt-1 shrink-0"></span>
                            <p className="text-justify text-600-400">برای ارتباط با ما میتونید سوشال مدیا های مارو دنبال کنید و اگه تخفیفی هم باشه اونجا قرار میگیره یا میتونید از طریق پنل کاربری با ارسال تیکت با ما در ارتباط باشید</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About