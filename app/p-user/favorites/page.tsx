import UserPanelPageContainer from '@/components/shared/UserPanelPageContainer'
import FavoritesContainer from '@/components/template/UserPanel/Favorites/FavoritesContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'نکست سورس | علاقه مندی ها'
}
const page = ({ searchParams: { filter = '' } }) => {

    return (
        <UserPanelPageContainer title='علاقـــه مندی ها'>
            <FavoritesContainer filter={filter} />
        </UserPanelPageContainer>
    )
}

export default page