import React from 'react'
import { ISeller } from '@/types/seller';


interface SellerDetailsSectionProps {
    seller: ISeller
}

const SellerDetailsSection = ({seller}: SellerDetailsSectionProps) => {
    return (
        <div className='bg-blue py-2 px-2 rounded-xl mt-8'>SellerDetailsSection</div>
    )
}

export default SellerDetailsSection