import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='h-20 bg-secondary flex'>
                <div className='flex-1'></div>
                <div className='flex-1 flex-center'>
                    <p className='text-xl text-amber-500'>نکستــ</p>
                    <Image priority alt='NextSource Logo App' src={'/assets/logo.svg'} width={64} height={64} />
                    <p className='text-xl text-amber-500'>ــسورس</p>
                </div>
                <div className='flex-1'></div>
            </div>
        </header>
    )
}

export default Header