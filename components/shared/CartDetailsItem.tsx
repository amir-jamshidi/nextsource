import Link from 'next/link'
import React from 'react'

interface CartDetailsItemProps {
    title: string,
    value: string | number
    color?: string,
    icon?: React.ReactNode,
    isNumber?: boolean,
    text?: string
    isLink?: boolean,
    href?: string
}


const CartDetailsItem = ({ isLink = false, href, title, value, color = 'text-blue-500', icon, isNumber = true, text = '' }: CartDetailsItemProps) => {

    return (
        <div className='h-20 bg-blue rounded-xl flex-center gap-0.5 border-section line-clamp-1'>
            {isLink ?
                (<Link href={`${href}`}>
                    <div className='flex items-center justify-center'>
                        <p className='text-700-300'>{title}</p>
                        <span className={`text-700-300 ${isNumber && 'font-dana-bold'} ${color} pt-0.5 ${icon && 'ml-1'}`}>{value}</span>
                        <span className='flex items-center justify-center'>{icon}</span>
                    </div>

                </Link>)
                :
                (
                    <div className='flex justify-center items-center'>
                        <p className='text-700-300'>{title}</p>
                        <span className={`text-700-300 ${isNumber && 'font-dana-bold'} ${color} pt-0.5`}>{value}</span>
                        <span className='flex justify-center items-center'>{icon}</span>
                    </div>
                )
            }
            <p className='text-700-300'>{text}</p>

        </div >
    )
}

export default CartDetailsItem