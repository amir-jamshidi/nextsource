'use client'

import { userPanelMenus } from '@/constants/userPanelMenus'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const UserPanelMenus = () => {

    const pathName = usePathname();

    return (
        <nav>
            <div className='container'>
                <div className='hidden bg-blue-menu border-section flex-wrap lg:h-12 mx-2 mt-2 rounded-xl md:flex justify-center items-center gap-1 py-3 px-1.5 lg:px-0 lg:py-0'>
                    {userPanelMenus.map(menu => (
                        <Link key={menu.id} href={`/p-user${menu.href}`}>
                            <div className='w-[92px] lg:w-28 flex-center gap-x-1 border border-gray-200 dark:border-gray-700/40 bg-gray-100 dark:bg-gray-800/40 py-1 rounded-xl'>
                                <p className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'dark:text-gray-300 text-gray-700'} text-xs md:text-sm`}>{menu.title}</p>
                                <span className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'dark:text-gray-400 text-gray-600'}`}>
                                    {menu.icon}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
              
                <div className='md:hidden py-4 px-3 gap-1 grid grid-cols-2 grid-rows-2 bg-blue-menu border-section  lg:h-12 mx-2 mt-2 rounded-xl'>
                    {userPanelMenus.map(menu => (
                        <Link key={menu.id} href={`/p-user${menu.href}`}>
                            <div className='flex-center border-gray-200 bg-gray-100 dark:border-gray-800 border gap-x-1 dark:bg-gray-800/40 py-2 rounded-xl'>
                                <p className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'dark:text-gray-300 text-gray-700'} text-xs md:text-sm`}>{menu.title}</p>
                                <span className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'dark:text-gray-400 text-gray-600'} flex justify-center items-center`}>
                                    {menu.icon}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default UserPanelMenus