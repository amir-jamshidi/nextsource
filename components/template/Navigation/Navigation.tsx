'use client'

import { useThemeProvider } from "@/contexts/ThemeContextProvider"
import CloseSidebarButton from './../../buttons/CloseSidebarButton/CloseSidebarButton';
import { useQuery } from "react-query";
import { getMenus } from "@/actions/menu.action";
import { DarkModeRounded, SearchRounded } from "@mui/icons-material";

const Navigation = () => {

    const themeContext = useThemeProvider()
    const { data = [], isLoading } = useQuery(["main-menus"], () => getMenus());

    return (
        <aside className={`flex lg:hidden transition-all fixed backdrop-blur-3xl top-0 w-full ${themeContext?.isOpenSidebar ? "right-0 opacity-100" : "-right-[100%] invisible opacity-0"} z-10`}>
            <div className='w-80 bg-secondary h-screen '>
                <div className="flex justify-between px-3 items-center mt-4 pb-4 border-b-gray-700/40 border-b">
                    <h2 className="text-xl font-morabba-bold text-gray-200">نکستــ سورس</h2>
                    <CloseSidebarButton />
                </div>
                <div className="mx-4 mt-6">
                    <div className="px-2 bg-gray-900 rounded-xl flex items-center gap-x-1.5">
                        <span className="">
                            <SearchRounded className="text-gray-300" />
                        </span>
                        <input type="text" className="py-2 w-full rounded-xl bg-gray-900 border-none outline-none text-gray-300" autoComplete="off" placeholder="دنبال چی میگردی ؟" />
                    </div>
                </div>
                <div className="flex flex-col my-4 px-3 mx-2 divide-y divide-gray-700/40">
                    {data.map(menu => (
                        <p key={JSON.stringify(menu._id)} className="text-700-300  px-3 py-2">{menu.title}</p>
                    ))}
                </div>
                <div className="border-t border-t-gray-700/40 flex-center pt-3">
                    <div>
                        <span className="w-10 h-10 flex-center bg-gray-700 rounded-full">
                            <DarkModeRounded className="text-gray-300" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen" onClick={() => themeContext?.handleSetIsOpenSidebar(false)}>
            </div>
        </aside>
    )
}

export default Navigation
