
interface DepositItemProps {
    deposit: { price: number, createdAt: Date, title: string }
}

const DepositItem = ({ deposit }: DepositItemProps) => {
    return (
        <>
            {deposit.price > 0 && (
                <div className='flex justify-between bg-gray-900 p-2 rounded-xl'>
                    <div className="text-sm flex items-center">
                        <p className='text-gray-300 border-l border-gray-800 pl-2 ml-2'>{deposit.title}</p>
                        <p className='text-green-500 mt-1'>{deposit.createdAt.toLocaleDateString('fa-IR')}</p>
                    </div>
                    <div className='flex text-sm items-center gap-x-0.5'>
                        <p className='font-dana-bold text-green-500'>{Number(deposit.price).toLocaleString()}</p>
                        <span className='text-green-500'>+</span>
                        <p className='text-green-500'>تومان</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default DepositItem