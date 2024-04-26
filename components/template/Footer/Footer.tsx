import { KeyboardArrowUpRounded } from "@mui/icons-material"

const Footer = () => {
    return (
        <footer className='mt-16 mb-6'>
            <div className="container">
                <div className="flex bg-blue w-full h-20 rounded-3xl px-4">
                    <div className="flex-1"></div>
                    <div className=" flex-center flex-col gap-1">
                        <p className="text-gray-300">تمامی حقوق این سایت متعلق دِوامیر می باشد</p>
                        <p className="text-sm text-gray-400">طراحی شده توسط امیرحسین جمشیدی</p>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <span className="flex-center w-10 h-10 rounded-full bg-gray-700">
                            <KeyboardArrowUpRounded className="text-gray-400"/>
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer