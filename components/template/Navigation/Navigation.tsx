'use client'

import { useThemeProvider } from "@/contexts/ThemeContextProvider"
import CloseSidebarButton from './../../buttons/CloseSidebarButton/CloseSidebarButton';
import { useQuery } from "react-query";
import { getMenus } from "@/actions/menu.action";

const Navigation = () => {

    const themeContext = useThemeProvider()
    const { data = [], isLoading } = useQuery(["main-menus"], () => getMenus());

    return (
        <aside className={`flex lg:hidden transition-all fixed backdrop-blur-3xl top-0 w-full ${themeContext?.isOpenSidebar ? "right-0 opacity-100" : "-right-[100%] invisible opacity-0"} z-10`}>
            <div className='w-80 bg-blue h-screen '>
                <div className="flex justify-between px-3 items-center mt-4 pb-4 border-b-gray-700 border-b">
                    <h2 className="text-xl font-morabba-bold text-gray-200">نکستــ سورس</h2>
                    <CloseSidebarButton />
                </div>
                <div className="flex flex-col my-6 px-4 gap-1">
                    {data.map(menu => (
                        <p key={JSON.stringify(menu._id)} className="text-700-300 bg-secondary px-3 rounded-xl py-2">{menu.title}</p>
                    ))}
                </div>
            </div>
            <div className="flex-1 h-screen" onClick={() => themeContext?.handleSetIsOpenSidebar(false)}>
            </div>
        </aside>
    )
}

export default Navigation
