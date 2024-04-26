import LinkButton from "@/components/shared/LinkButton"


const CartSection = () => {
    return (
        <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="h-32 bg-blue rounded-xl flex-center flex-col gap-y-1">
                    <h1 className="text-lg text-700-300">سورس مد نظرتو پیدا نمیکنی ؟</h1>
                    <p className="text-600-400 text-sm">نگران نباش ، اگه پیداش نمیکنی میتونی درخواست ثبت کنی</p>
                    <LinkButton extraClasses="py-1.5 mt-1" color="blue" href="/requset" text="درخواست سورس" />
                </div>
                <div className="h-32 bg-blue rounded-xl flex-center flex-col gap-y-1">
                    <h1 className="text-lg text-700-300">سورس داریو میخوای بفروشی ؟</h1>
                    <p className="text-600-400 text-sm">یه درخواست ثبت کن که از این ببعد فروشنده سایت ما بشی</p>
                    <LinkButton extraClasses="py-1.5 mt-1" color="green" href="/req" text="درخواست فروشندگی" />
                </div>
            </div>
        </section>
    )
}

export default CartSection