import { getMyFavorites } from '@/actions/favorite.action'
import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import FavoritesSection from '@/components/template/UserPanel/Favorites/FavoritesSection'
import { userPanelFilter } from '@/constants/userPanelFilter'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ searchParams: { filter = '' } }) => {

    const favorites = await getMyFavorites(filter);
    if (!favorites) return notFound();

    return (
        <UserPanelPageContainer title='علاقـــه مندی ها'>
            <UserPanelFilterSection filters={userPanelFilter} productsCount={favorites.length} />
            <FavoritesSection favorites={favorites} />
        </UserPanelPageContainer>
    )
}

export default page