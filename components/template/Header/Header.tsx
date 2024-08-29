import Link from 'next/link'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import { ArrowLeftRounded, SearchRounded } from '@mui/icons-material';
import isLogin from '@/middlewares/isLogin';
import { getMenus } from '@/actions/menu.action';
import { IProduct } from '@/types/product';
import ToggleThemeButton from '@/components/buttons/ToggleThemeButton/ToggleThemeButton';
import MobileHeader from './MobileHeader';
import SearchSection from './SearchSection';

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
                                <h1 className='dark:text-gray-200 text-gray-800 text-xl font-morabba-bold'>
                                    نکستــ
                                    {" "}
                                    سورس
                                </h1>
                            </Link>
                        </div>
                        <div className='flex-1 flex-center'>
                            <SearchSection />
                        </div>
                        <div className='flex-1 flex justify-end items-center gap-x-1 '>
                            <ToggleThemeButton />
                            {!isLoginUser ? (
                                <Link href={'/login'} className='dark:text-gray-200 text-gray-100 text-sm rounded-3xl px-4 py-2.5 bg-btns border border-green-500 dark:border-gray-300/10'>ورود یا عضویت</Link>
                            ) : (
                                <Link href={'/p-user/dashboard'} className='dark:text-gray-200 text-gray-100 text-sm rounded-3xl px-4 py-2.5 bg-btns border border-green-500 dark:border-gray-300/10'>پنل کاربری</Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='container z-10'>
                    <div className='h-14 bg-blue mt-2 max-w-4xl rounded-3xl mx-auto flex-center gap-x-1'>
                        {menus.map(menu => (
                            <div key={menu._id} className='relative group cursor-pointer'>
                                <Link href={menu.href}>
                                    <p key={JSON.stringify(menu._id)} className='text-700-300 px-2 py-1 rounded-lg' > {menu.title}</p>
                                </Link>
                                {menu.products.length > 0 && (
                                    <div className="group-hover:visible invisible top-0 mt-8 absolute pt-4">
                                        <div className='border-section bg-gradient-to-r from-white to-white dark:from-cyan-950 dark:to-blue-950 flex flex-col text-gray-600 dark:text-gray-300 gap-y-1.5 backdrop-blur-2xl w-60 rounded-xl px-3 py-3'>
                                            {menu.products.map((product: IProduct) =>
                                                <Link key={String(product._id)} href={`/product/${product.href}`} className='z-10 flex items-center hover:text-amber-500 transition-colors'>
                                                    <span className='flex justify-center items-center'>
                                                        <ArrowLeftRounded />
                                                    </span>
                                                    <p>
                                                        {product.title}
                                                    </p>
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
            <MobileHeader />
        </>
    )
}

export default Header