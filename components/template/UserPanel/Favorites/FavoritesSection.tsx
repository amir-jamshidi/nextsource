import { getFavorites } from '@/actions/favorite.action'
import SourceContainer from '@/components/shared/SourceContainer'
import SourceItem from '@/components/shared/SourceItem'
import { IFavorite } from '@/types/favorite'
import { IProduct } from '@/types/product'
import React from 'react'
interface FavoritesSectionProps {
    favorites: IFavorite[]
}
const FavoritesSection = async ({ favorites }: FavoritesSectionProps) => {

    return (
        <SourceContainer margin={false}>
            {favorites.map(fav => (
                <SourceItem key={fav._id} product={fav.productID as IProduct} />
            ))}
        </SourceContainer>
    )
}

export default FavoritesSection