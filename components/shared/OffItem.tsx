const OffItem = ({ precent, pos }: { precent: number, pos?: string }) => {

    return (
        <span className={`${pos ? pos : 'top-1 left-1'} absolute z-[5] font-dana bg-red-500/60 text-gray-300 rounded-full flex-center w-8 h-8 text-xs `}>
            {precent}%
        </span>
    )
}

export default OffItem