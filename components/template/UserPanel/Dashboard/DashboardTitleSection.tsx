
const DashboardTitleSection = ({ title }: { title: string }) => {
    return (
        <div className=' flex items-center gap-x-2 text-xs md:text-sm mx-2 md:mx-0'>
            <span className='flex h-px bg-gray-800 flex-1'></span>
            <p className='text-gray-300'>{title}</p>
            <span className='flex h-px bg-gray-800 flex-1'></span>
        </div>
    )
}

export default DashboardTitleSection