import UserPanelFilterSection from '@/components/shared/UserPanelFilterSection'
import React from 'react'
import FavoritesSection from './FavoritesSection'
import { getMyFavorites } from '@/actions/favorite.action';
import { notFound } from 'next/navigation';
import { userPanelTicketFilter } from '@/constants/userPanelTicketsFilter';

const FavoritesContainer = async ({ filter }: { filter: string }) => {

    const favorites = await getMyFavorites(filter);
    if (!favorites) return notFound();

    return (
        <>
            <UserPanelFilterSection title='علاقه مندی' filters={userPanelTicketFilter} productsCount={favorites.length} />
            <FavoritesSection favorites={favorites} />
        </>
    )
}

export default FavoritesContainer