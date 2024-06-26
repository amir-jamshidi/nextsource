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
                <div className='hidden bg-blue-light flex-wrap lg:h-12 mx-2 mt-2 rounded-xl md:flex justify-center items-center gap-1 py-3 px-1.5 lg:px-0 lg:py-0'>
                    {userPanelMenus.map(menu => (
                        <Link key={menu.id} href={`/p-user${menu.href}`}>
                            <div className='w-[92px] lg:w-28 flex-center gap-x-1 bg-gray-800/40 py-1 rounded-xl'>
                                <p className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'text-gray-300'} text-xs md:text-sm`}>{menu.title}</p>
                                <span className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'text-gray-400'}`}>
                                    {menu.icon}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='md:hidden py-4 px-3 gap-1 grid grid-cols-2 grid-rows-2 bg-blue-light  lg:h-12 mx-2 mt-2 rounded-xl'>
                    {userPanelMenus.map(menu => (
                        <Link key={menu.id} href={`/p-user${menu.href}`}>
                            <div className='flex-center border-gray-800 border gap-x-1 bg-gray-800/40 py-1.5 rounded-xl'>
                                <p className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'text-gray-300'} text-xs md:text-sm`}>{menu.title}</p>
                                <span className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'text-gray-400'}`}>
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