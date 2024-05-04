import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import OpenSidebarButton from '../../buttons/OpenSidebarButton/OpenSidebarButton';
import { DarkModeRounded, PersonRounded, SearchRounded, VpnKeyOutlined } from '@mui/icons-material';
import isLogin from '@/middlewares/isLogin';
import { getMenus } from '@/actions/menu.action';
import { IProduct } from '@/types/product';

const Header = async () => {

    const isLoginUser = await isLogin();
    const menus = await getMenus();

    return (
        <>
            <Navigation />
            <header className='hidden lg:flex mt-6 flex-col'>
                <div className='container'>
                    <div className='h-20 bg-blue rounded-3xl flex px-8'>
                        <div className='flex-1 flex justify-start items-center'>
                            <Link href={'/'}>
                                <h1 className='text-gray-200 text-xl font-morabba-bold'>
                                    نکستــ
                                    {" "}
                                    سورس
                                </h1>
                            </Link>
                        </div>
                        <div className='flex-1 flex-center'>
                            <div className='bg-gray-900 rounded-xl w-full flex items-center px-2 gap-x-1.5'>
                                <span>
                                    <SearchRounded className='text-gray-400' />
                                </span>
                                <input type="text" className='bg-gray-900 w-full rounded-lg py-2 border-none outline-none text-gray-300' placeholder='دنبال چی میگردی ؟ برام بنویس ...' />
                            </div>
                        </div>
                        <div className='flex-1 flex justify-end items-center gap-x-1 '>
                            <span className='w-10 h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
                                <DarkModeRounded className='text-gray-300' />
                            </span>
                            {!isLoginUser ? (
                                <Link href={'/login'} className='text-gray-200 text-sm rounded-3xl px-4 py-2.5 bg-blue border border-gray-300/10'>ورود یا عضویت</Link>
                            ) : (
                                <Link href={'/panel'} className='text-gray-200 text-sm rounded-3xl px-4 py-2.5 bg-blue border border-gray-300/10'>پنل کاربری</Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='h-14 bg-blue mt-2 max-w-4xl rounded-3xl mx-auto flex-center gap-x-1'>
                        {menus.map(menu => (
                            <div className='relative group cursor-pointer'>
                                <Link href={''}>
                                    <p key={JSON.stringify(menu._id)} className='text-gray-300 px-2 py-1 rounded-lg' > {menu.title}</p>
                                </Link>
                                {menu.products.length > 0 && (
                                    <div className=" group-hover:visible invisible top-0 mt-8 absolute pt-4">
                                        <div className='bg-blue flex flex-col text-gray-300 gap-y-1.5 backdrop-blur-2xl w-60 rounded-xl px-3 py-3'>
                                            {menu.products.map((product: IProduct) =>
                                                <Link href={product.href} className='backd'>
                                                    {product.title}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}
                    </div>
                </div>
            </header >

            <header className='mt-4 mx-1 lg:hidden'>
                <div className="container">
                    <div className='h-20 bg-blue flex rounded-xl px-3 lg:px-4'>
                        <div className='flex-1 flex  items-center justify-start '>
                            <OpenSidebarButton />
                        </div>

                        <div className='flex-1 flex-center'>
                            <p className='text-lg  text-gray-200 font-morabba-bold'>نکستــ</p>
                            <Image priority alt='NextSource Logo App' src={'/assets/logo.svg'} width={64} height={64} />
                            <p className='text-lg  text-gray-200 font-morabba-bold'>ــسورس</p>
                        </div>

                        <div className='flex-1 flex justify-end items-center'>
                            {!isLoginUser ? (
                                <Link href={'/login'} className='flex'>
                                    <span className='inline-block h-10 w-10 bg-gray-700 rounded-full p-2'>
                                        <VpnKeyOutlined className='text-gray-300' />
                                    </span>
                                </Link>) : (
                                <Link href={'/panel'} className='flex'>
                                    <span className='inline-block h-10 w-10 bg-gray-700 rounded-full p-2'>
                                        <PersonRounded className='text-gray-300' />
                                    </span>
                                </Link>)}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header