'use client'
import { addToFavorites, removeFromFavorite } from '@/actions/favorite.action'
import { FavoriteRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface FavoriteButtonProps {
    productID: string,
    isHasToFav: boolean
}

const FavoriteButton = ({ productID, isHasToFav }: FavoriteButtonProps) => {

    const [isFav, setIsFav] = useState(isHasToFav);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleAddToFavorite = async () => {
        try {
            setIsLoading(true)
            const result = await addToFavorites(productID);
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setIsFav(true)
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته')
        } finally {
            setIsLoading(false);
        }
    }
    const handleRemoveFavorite = async () => {
        try {
            setIsLoading(true)
            const result = await removeFromFavorite(productID)
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setIsFav(false);
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button disabled={isLoading} onClick={isHasToFav ? handleRemoveFavorite : handleAddToFavorite} className='bg-btns w-9 h-9 shrink-0 rounded-full flex-center'>
            <FavoriteRounded className={`${(isFav) ? 'text-red-500' : 'dark:text-gray-500 text-gray-200'}`} />
        </button>
    )
}

export default FavoriteButton