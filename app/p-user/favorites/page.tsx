import { getMyFavorites } from '@/actions/favorite.action'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import FavoritesSection from '@/components/template/UserPanel/Favorites/FavoritesSection'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ searchParams: { filter = '' } }) => {

    const favorites = await getMyFavorites(filter);
    if (!favorites) return notFound();

    return (
        <UserPanelPageContainer title='علاقـــه مندی ها'>
            <UserPanelFilterSection productsCount={favorites.length} />
            <FavoritesSection favorites={favorites} />
        </UserPanelPageContainer>
    )
}

export default page