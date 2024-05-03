import React from 'react'

interface CartDetailsItemProps {
    title: string,
    value: string | number
    color?: string,
    icon?: React.ReactNode,
    isNumber?: boolean,
    text?: string
}


const CartDetailsItem = ({ title, value, color = 'text-blue-500', icon, isNumber = true, text = '' }: CartDetailsItemProps) => {
    return (
        <div className='h-20 bg-blue rounded-xl flex-center gap-0.5'>
            <p className='text-gray-300'>{title}</p>
            <span className={`${isNumber && 'font-dana-bold'} ${color} pt-0.5`}>{value}</span>
            <span>{icon}</span>
            <p className='text-gray-300'>{text}</p>
        </div>
    )
}

export default CartDetailsItem