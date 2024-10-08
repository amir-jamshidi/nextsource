'use client'

import { useThemeProvider } from "@/contexts/ThemeContextProvider"
import CloseSidebarButton from './../../buttons/CloseSidebarButton/CloseSidebarButton';
import { useQuery } from "react-query";
import { getMenus } from "@/actions/menu.action";
import { ArrowDropDown, ArrowLeftRounded, DarkModeRounded, SearchRounded } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { IProduct } from "@/types/product";
import NavigationSearchSection from "./NavigationSearchSection";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton/ToggleThemeButton";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(-1);
    const themeContext = useThemeProvider()
    const { data: menus = [] } = useQuery(["main-menus"], () => getMenus());

    return (
        <aside className={`flex lg:hidden transition-all fixed backdrop-blur-3xl top-0 w-full ${themeContext?.isOpenSidebar ? "right-0 opacity-100" : "-right-[100%] invisible opacity-0"} z-[100]`}>
            <div className='w-80 bg-blue-full h-screen overflow-y-auto '>
                <div className="flex justify-between px-3 items-center mt-4 pb-4 border-b-gray-200 dark:border-b-gray-700/40 border-b">
                    <Link href={'/'}>
                        <h2 className="text-xl font-morabba-bold text-800-200">نکستــ سورس</h2>
                    </Link>
                    <CloseSidebarButton />
                </div>
                <div className="mx-4 mt-6">
                    <NavigationSearchSection />
                </div>
                <div className="flex flex-col my-4 px-3 mx-2 divide-y divide-gray-200 dark:divide-gray-700/40">
                    {menus.map((menu, i) => (
                        <div key={menu._id} className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <Link href={menu.href} onClick={() => themeContext?.handleSetIsOpenSidebar(false)}>
                                    <p key={String(menu._id)} className="text-700-300  px-3 py-2">{menu.title}</p>
                                </Link>
                                {menu.products.length > 0 && (
                                    <span className="bg-gray-300 dark:bg-gray-800 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer" onClick={() => setIsOpen(prev => prev === i ? -1 : i)}>
                                        <ArrowDropDown className="text-600-400" />
                                    </span>
                                )}
                            </div>
                            {i === isOpen && (
                                <div className={`${i === isOpen ? '' : 'invisible h-0'} flex flex-col px-2 gap-y-1 pb-4`}>
                                    {menu.products.map((product: IProduct) => (
                                        <Link key={product._id} onClick={() => themeContext?.handleSetIsOpenSidebar(false)} href={`/product/${product.href}`} className="text-sm text-600-400 flex items-center">
                                            <span className="flex items-center justify-center">
                                                <ArrowLeftRounded />
                                            </span>
                                            {product.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="border-t border-t-gray-200 dark:border-t-gray-700/40 flex-center pt-3">
                    <div>
                        <ToggleThemeButton />
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen" onClick={() => themeContext?.handleSetIsOpenSidebar(false)}>
            </div>
        </aside>
    )
}
export default Navigation
