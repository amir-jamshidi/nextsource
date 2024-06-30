'use client'

import { seenNotification } from "@/actions/notification.action"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import toast from "react-hot-toast"

interface SeeNotificationButtonProps {
    notificationID: string
}

const SeeNotificationButton = ({ notificationID }: SeeNotificationButtonProps) => {

    const [isPending, startTransition] = useTransition();

    const handleSeenNotification = () => {
        startTransition(() => seenNotification(notificationID))
    }

    return (
        <button disabled={isPending} onClick={handleSeenNotification} className='text-amber-500'>
            {isPending ? <div className="donut-small"></div> : 'باشه'}
        </button>
    )
}

export default SeeNotificationButton