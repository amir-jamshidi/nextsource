import React from 'react'

const Modal = ({ children, isShow }: { children: React.ReactNode, isShow: boolean }) => {

    return (
        <div className={`${isShow ? ' opacity-100 visible ' : ' opacity-0 invisible '} transition-all z-20 fixed w-full h-screen flex-center bg-gray-800/30 backdrop-blur-lg top-0 left-0 right-0 bottom-0`}>
            <div className='w-4/5 md:w-1/2 lg:w-1/3 px-6 py-4 bg-blue rounded-xl'>
                {children}
            </div>
        </div>
    )
}

export default Modal