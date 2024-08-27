import ScrollToTop from "@/components/buttons/ScrollToTop/ScrollToTop"

const Footer = () => {
    return (
        <footer className='mt-16 mb-6'>
            <div className="container">
                <div className="flex bg-blue w-full h-20 rounded-3xl px-4">
                    <div className="flex-1"></div>
                    <div className=" flex-center flex-col gap-1">
                        <p className="text-600-400 text-sm">تمامی حقوق این سایت متعلق دِوامیر می باشد</p>
                        <p className="text-sm text-gray-400">طراحی شده توسط امیرحسین جمشیدی</p>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <ScrollToTop />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer