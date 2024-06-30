'use server'

import connectToDB from "@/database/db"
import { MessageCreator } from "@/libs/MessageCreator";
import isLogin from "@/middlewares/isLogin";
import notificationModel from "@/models/notification.module";
import { INotification } from "@/types/notification";
import { revalidatePath } from "next/cache";

export const getMyNotifications = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const notifications: INotification[] = await notificationModel.find({ userID: isLoginUser._id, isSeen: false }).sort({ _id: -1 }).limit(6).lean();
        return notifications
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}

export const seenNotification = async (notificationID: string) => {
    await connectToDB();
    const isLoginUser = await isLogin();
    if (!isLoginUser) throw new Error('خطای ناشناخته')
    await notificationModel.findOneAndUpdate({
        _id: notificationID,
        userID: isLoginUser._id
    }, {
        isSeen: true
    });
    revalidatePath('/p-user', 'layout');
}
