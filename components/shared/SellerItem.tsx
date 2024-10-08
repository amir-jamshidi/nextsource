import { ISeller } from '@/types/seller'
import { IUser } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface SellerItemProps {
    seller: ISeller
}

const SellerItem = ({ seller }: SellerItemProps) => {

    const user = seller.userID as IUser;

    return (
        <Link href={`/seller/${seller.href}`}>
            <div className="h-44 bg-blue rounded-xl flex-center flex-col text-sm">
                <div className="w-16 h-16 relative">
                    <Image src={user.profile} className="rounded-full" fill={true} style={{ objectFit: 'cover' }} alt="" />
                </div>
                <p className="text-700-300 mt-3">{user.fullname}</p>
                <div className='grid grid-cols-[3fr,2fr] bg-blue-light rounded-xl w-4/5 py-2 mt-3'>
                    <div className="flex w-full items-center justify-center gap-x-1">
                        <p className="font-dana-bold text-amber-500 text-xs">{seller.score}</p>
                        <p className="text-amber-500 text-xs">امتیاز</p>
                    </div>
                    <p className="w-full flex justify-center border-r border-r-gray-200 dark:border-r-gray-700  text-green-500 text-xs">
                        {user.role === 'ADMIN' && 'مدیر'}
                        {user.role === 'SELLER' && 'فروشنده'}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SellerItem