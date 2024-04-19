'use client'

import { useThemeProvider } from "@/contexts/ThemeContextProvider"
import CloseSidebarButton from './../../buttons/CloseSidebarButton/CloseSidebarButton';

const Navigation = () => {

    const themeContext = useThemeProvider()

    return (
        <aside className={`flex transition-all absolute backdrop-blur-3xl top-0 w-full ${themeContext?.isOpenSidebar ? "right-0 opacity-100" : "-right-[100%] invisible opacity-0"}`}>
            <div className='w-80 bg-gray-50 h-screen'>
                <CloseSidebarButton />
            </div>
            <div className="flex-1 h-screen" onClick={() => themeContext?.handleSetIsOpenSidebar(false)}>
            </div>
        </aside>
    )
}

export default Navigation
