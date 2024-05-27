'use server'

import connectToDB from "@/database/db"
import isLogin from "@/middlewares/isLogin";
import notificationModel from "@/models/notification.module";
import { INotification } from "@/types/notification";

export const getMyNotifications = async () => {
    try {
        await connectToDB();
        const isLoginUser = await isLogin();
        if (!isLoginUser) return false
        const notifications: INotification[] = await notificationModel.find({ userID: isLoginUser._id });
        return notifications
    } catch (error) {
        throw new Error('خطای ناشناخته')
    }
}