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
                <div className='bg-blue-light h-12 mx-2 mt-2 rounded-xl flex justify-center items-center gap-x-1'>
                    {userPanelMenus.map(menu => (
                        <Link href={`/p-user/${menu.href}`}>
                            <div className='w-28 flex-center gap-x-1 bg-gray-800/40 py-1 rounded-xl'>
                                <p className={`${pathName.includes(menu.href) ? 'text-amber-500' : 'text-gray-300'} text-sm`}>{menu.title}</p>
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