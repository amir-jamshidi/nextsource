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
            <div className="h-44 bg-blue-light rounded-xl flex-center flex-col text-sm">
                <div className="w-16 h-16 relative">
                    <Image src={'https://sabzlearn.ir/wp-content/uploads/2024/03/Docker1-1-1-768x432.webp'} className="rounded-full" fill={true} style={{ objectFit: 'cover' }} alt="" />
                </div>
                <p className="text-gray-200 mt-3">{user.fullname}</p>
                <div className="flex gap-x-1 mt-1">
                    <p className="font-dana-bold text-amber-500">{seller.score}</p>
                    <p className="text-amber-500">امتیاز</p>
                </div>
                <p className="bg-gray-800/30 px-3 rounded-lg mt-1 text-green-500">
                    {user.role === 'ADMIN' && 'مدیر'}
                    {user.role === 'SELLER' && 'فروشنده'}
                </p>
            </div>
        </Link>
    )
}

export default SellerItem