import OpenSidebarButton from "@/components/buttons/OpenSidebarButton/OpenSidebarButton"
import isLogin from "@/middlewares/isLogin"
import { PersonRounded, VpnKeyOutlined } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

const MobileHeader = async () => {

    const isLoginUser = await isLogin();

    return (
        <header className='mt-4  lg:hidden'>
            <div className="container">
                <div className='h-20 bg-blue flex rounded-xl px-3 lg:px-4'>
                    <div className='flex-1 flex  items-center justify-start '>
                        <OpenSidebarButton />
                    </div>

                    <div className='flex-1 flex-center'>
                        <p className='text-lg  text-gray-200 font-morabba-bold'>نکستــ</p>
                        <Link href={'/'} className='w-16 h-16'>
                            <Image priority alt='NextSource Logo App' src={'/assets/logo.svg'} width={64} height={64} />
                        </Link>
                        <p className='text-lg  text-gray-200 font-morabba-bold'>ــسورس</p>
                    </div>

                    <div className='flex-1 flex justify-end items-center'>
                        {!isLoginUser ? (
                            <Link href={'/login'} className='flex'>
                                <span className='flex flex-center h-10 w-10 bg-blue border border-gray-300/10 rounded-full p-2'>
                                    <VpnKeyOutlined className='text-gray-300' />
                                </span>
                            </Link>) : (
                            <Link href={'/panel'} className='flex'>
                                <span className='flex flex-center h-10 w-10 bg-gray-700 bg-blue border border-gray-300/10  rounded-full p-2'>
                                    <PersonRounded className='text-gray-300' />
                                </span>
                            </Link>)}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MobileHeader