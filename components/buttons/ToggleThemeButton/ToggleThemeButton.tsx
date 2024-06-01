'use client'

import { useThemeProvider } from '@/contexts/ThemeContextProvider'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'

const ToggleThemeButton = () => {

    const context = useThemeProvider();

    return (
        <span onClick={context?.changeTheme} className='w-9 h-9 md:w-10 md:h-10 rounded-full flex-center bg-blue border border-gray-300/10 cursor-pointer'>
            {context?.theme === 'dark' ? (<LightModeRounded className='text-gray-300' />) : (<DarkModeRounded className='text-gray-300' />)}
        </span>
    )
}

export default ToggleThemeButton