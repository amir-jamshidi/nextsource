'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

interface IThemeContextProvider {
    children: React.ReactNode
}

interface IThemeProvider {
    theme: string;
    changeTheme: () => void;
    isOpenSidebar: boolean,
    handleSetIsOpenSidebar: (status: boolean) => void
}

const ThemeContextProvider = createContext<IThemeProvider | null>(null);

const ThemeProvider = ({ children }: IThemeContextProvider) => {

    const [theme, setTheme] = useState('light');
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const changeTheme = () => {
        setTheme(theme => theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    }

    const handleSetIsOpenSidebar = (status: boolean) => {
        setIsOpenSidebar(status)
        if (status) document.body.style.overflow = 'hidden';
        if (!status) document.body.style.overflow = 'auto';

    }

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
    }, [])

    return (
        <>
            <QueryClientProvider client={new QueryClient({})}>
                <ThemeContextProvider.Provider value={{ theme, changeTheme, isOpenSidebar, handleSetIsOpenSidebar }}>
                    {children}
                </ThemeContextProvider.Provider>
            </QueryClientProvider>
        </>
    )
}

export default ThemeProvider

export const useThemeProvider = () => {
    const context = useContext(ThemeContextProvider);
    if (context === undefined) throw new Error('Error To Access The Context Api');
    return context
}