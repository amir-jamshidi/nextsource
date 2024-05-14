'use client'
import { ArrowBackIosRounded } from '@mui/icons-material';
import { useRouter } from 'next/navigation'

const BackButton = ({ bg }: { bg?: boolean }) => {

    const router = useRouter();

    return (
        <button onClick={() => router.back()} className={`top-1 left-1 absolute w-10 h-10 rounded-full ${bg && 'bg-blue'} `}>
            <ArrowBackIosRounded fontSize='small' className='text-gray-300' />
        </button >
    )
}

export default BackButton