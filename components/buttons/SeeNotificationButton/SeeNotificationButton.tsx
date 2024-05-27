'use client'

import { seenNotification } from "@/actions/notification.action"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

interface SeeNotificationButtonProps {
    notificationID: string
}

const SeeNotificationButton = ({ notificationID }: SeeNotificationButtonProps) => {

    const router = useRouter();

    const handleSeenNotification = async () => {
        try {
            const res = await seenNotification(notificationID);
            if (!res.state) return toast.error(res.message)
            router.refresh();
        } catch (error) {
            throw new Error('خطای ناشناخته')
        }
    }

    return (
        <button onClick={handleSeenNotification} className='text-amber-500'>باشه</button>
    )
}

export default SeeNotificationButton