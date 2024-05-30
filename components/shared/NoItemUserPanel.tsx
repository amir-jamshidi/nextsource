
interface NoItemProps {
    title: string
}

const NoItemUserPanel = ({ title }: NoItemProps) => {
    return (
        <div className='py-12 flex-center bg-blue-600/10 rounded-2xl mt-6' >
            <p className='text-sm text-amber-500'>{title}</p>
        </div >
    )
}

export default NoItemUserPanel