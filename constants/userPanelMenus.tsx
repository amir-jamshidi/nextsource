import { AttachMoneyRounded, DashboardRounded, EmojiEventsRounded, FavoriteRounded, HelpRounded, HomeRounded, InfoRounded, MonetizationOnRounded, QuestionMarkRounded, SendRounded, ShoppingCartRounded } from "@mui/icons-material";

export const userPanelMenus = [
    {
        id: 1,
        title: 'داشبورد',
        href: '/dashboard',
        icon: <DashboardRounded fontSize="small" />
    },
    {
        id: 2,
        title: 'سفارش ها',
        href: '/orders',
        icon: < ShoppingCartRounded fontSize="small" />
    },
    {
        id: 3,
        title: 'تیکت ها',
        href: '/tickets',
        icon: <SendRounded fontSize="small" />
    },
    {
        id: 4,
        title: 'پلن ها',
        href: '/plans',
        icon: <EmojiEventsRounded fontSize="small" />
    },
    {
        id: 5,
        title: 'علاقه مندی',
        href: '/favorites',
        icon: <FavoriteRounded fontSize="small" />
    },
    {
        id: 6,
        title: 'درخواست ها',
        href: '/requests',
        icon: <HelpRounded fontSize="small" />
    },
    {
        id: 7,
        title: 'بخش مالی',
        href: '/wallet',
        icon: <MonetizationOnRounded fontSize="small" />
    },
    {
        id: 8,
        title: 'مشخصات',
        href: '/infos',
        icon: <InfoRounded fontSize="small"/>
    },
]