
const OffItem = ({ precent }: { precent: number }) => {
    return (
        <span className="absolute z-[5] top-1 left-1 font-dana bg-red-500/50 text-gray-300 rounded-full flex-center w-8 h-8 text-xs ">
            {precent}%
        </span>
    )
}

export default OffItem