'use client'
import { addToFavorites, removeFromFavorite } from '@/actions/favorite.action'
import { FavoriteRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface FavoriteButtonProps {
    productID: string,
    isHasToFav: boolean
}

const FavoriteButton = ({ productID, isHasToFav }: FavoriteButtonProps) => {

    const [isFav, setIsFav] = useState(isHasToFav);
    const router = useRouter();

    const handleAddToFavorite = async () => {
        try {
            const result = await addToFavorites(productID);
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setIsFav(true)
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته')
        }
    }
    const handleRemoveFavorite = async () => {
        try {
            const result = await removeFromFavorite(productID)
            if (!result.state) return toast.error(result.message);
            toast.success(result.message);
            setIsFav(false);
            router.refresh();
        } catch (error) {
            toast.error('خطای ناشناخته')
        }
    }

    return (
        <button onClick={isHasToFav ? handleRemoveFavorite : handleAddToFavorite} className='bg-blue w-9 h-9 rounded-full flex-center'>
            <FavoriteRounded className={`${(isFav) ? 'text-red-500' : 'text-gray-500'}`} />
        </button>
    )
}

export default FavoriteButton