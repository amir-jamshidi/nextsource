import { getMyNotifications } from '@/actions/notification.action'
import { NotificationsRounded } from '@mui/icons-material'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SeeNotificationButton from '../SeeNotificationButton/SeeNotificationButton';

const NotificationButton = async () => {

    const notifications = await getMyNotifications();
    if (!notifications) return notFound();
    return (
        <div className="relative group z-[9999]">
            <span className='border-gray-100 w-9 h-9 md:w-10 md:h-10 rounded-full flex-center bg-blue border dark:border-gray-300/10 cursor-pointer'>
                <NotificationsRounded className='text-gray-600 dark:text-gray-300' />
                {notifications.length > 0 && (
                    <span className='flex w-2 absolute top-0.5 right-0.5 h-2 rounded-full bg-red-500'></span>
                )}
            </span>
            <div className='flex absolute w-72 left-0 pt-2 delay-75 invisible group-hover:visible z-10'>
                <div className='bg-blue rounded-xl w-full p-2 border-section'>
                    <div className=' w-full flex flex-col gap-y-1'>
                        {notifications.length > 0 ? (
                            <>
                                {notifications.map(notif => (
                                    <div key={notif._id} className='bg-blue-max p-2 rounded-xl border-section'>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-700-300 text-xs md:text-sm'>{notif.title}</p>
                                            <span className='flex-1 h-px bg-gray-200 dark:bg-gray-700 mx-1 flex'></span>
                                            <p className='text-600-400 text-xs md:text-sm'>{notif.createdAt?.toLocaleTimeString('fa-IR')}</p>
                                        </div>
                                        <div className='mt-1.5'>
                                            <p className='text-sm text-700-300'>{notif.body}</p>
                                        </div>
                                        <div className='text-sm flex items-center gap-x-1.5 mt-1.5 justify-between'>
                                            <div>
                                                <p className='text-xs md:text-sm text-600-400'>{notif.createdAt?.toLocaleDateString('fa-IR')}</p>
                                            </div>
                                            <div className='flex gap-x-2 text-xs md:text-sm'>
                                                {notif.href && (<Link className='text-green-500' href={`${notif.href}`}>دیدن</Link>)}
                                                <SeeNotificationButton notificationID={JSON.parse(JSON.stringify(notif._id))} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="bg-blue-max rounded-xl flex-center">
                                <p className="text-sm text-gray-400 py-4">اعلانی برای نمایش نیست</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationButton